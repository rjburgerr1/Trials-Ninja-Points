const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const CalcNP = require("./calculate-ninja-points");

/**
 * This function creates and starts a cron job that will run every hour.
 * This cron job grabs all existing runs & runs. Next, it combines the tracks' real metrics
 * with each runs data. After that it will calculate new ninja point values for each
 * existing run and finally updates each run
 */
const UpdateRuns = () => {
    try {
        var CronJob = require("cron").CronJob;

        var job = new CronJob(
            "0 0 * * * *",
            async function () {
                const runs = await prisma.runs.findMany({
                    select: {
                        id: true,
                        creator: true,
                        track_name: true,
                        faults: true,
                        time: true,
                    },
                });

                const tracksMetrics = await prisma.tracks.findMany({
                    select: {
                        track_name: true,
                        creator: true,
                        ninja_level: true,
                        length: true,
                        consistency: true,
                    },
                });

                let result = await mergeRunsWTrackMetrics(runs, tracksMetrics);

                // Recalculate ninja points for each run
                result.forEach((run) => {
                    run["ninjaPoints"] = CalcNP(run);
                });

                result.forEach(async (run) => {
                    await prisma.runs.updateMany({
                        where: {
                            creator: run.creator,
                            track_name: run.track_name,
                        },
                        data: {
                            ninja_points: run.ninjaPoints,
                        },
                    });
                });
            },
            null,
            true,
            "America/Los_Angeles"
        );

        job.start();
    } catch (error) {
        console.log(error);
    }
};

/**
 * This function merges current true track metrics with all existing runs
 * When the merge happens, the true values of fields like length, an ninja level
 * overwrite each run's opinions of those fields
 *
 * 	THIS FUNCTION MIGHT NEED IMPROVEMENT LATER BY
 *  INTRODUCING GROUPBY FUNCTIONALITY TO PREVENT SO MUCH DATA FROM BEING
 *  INVOLVED IN A FOLLOWUP PRISMA.UPDATE
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
function mergeRunsWTrackMetrics(arr1, arr2) {
    let result = arr1.map((item) => {
        let object = {};
        arr2.forEach((element) => {
            if (
                item.creator === element.creator &&
                item.track_name === element.track_name
            ) {
                //merging two objects

                object = Object.assign({}, item, element);
            }
        });
        return object;
    });

    result = result.filter((element) => element !== undefined);

    return result;
}

module.exports = UpdateRuns;
