const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const synthesizeData = require("../synthesize-run-data/synthesize-data");

/**
 * This function creates and starts a cron job that will run every hour.
 * This cron job grabs all existing runs & tracks. Next, it combines the tracks' real metrics
 * with each runs data. After that it will calculate new ninja point values for each
 * existing run and finally updates each run
 */
const UpdateTracks = () => {
    try {
        var CronJob = require("cron").CronJob;

        var job = new CronJob(
            "0 30 * * * *", // Hourly CRON job
            async function () {
                // Get all runs and select fields that are used in calculating NP
                const runs = await prisma.runs.findMany({
                    select: {
                        id: true,
                        creator: true,
                        track_name: true,
                        faults: true,
                        rating: true,
                        time: true,
                        length: true,
                        consistency: true,
                        ninja_level: true,
                    },
                });

                runs.forEach(async (run) => {
                    await prisma.tracks.update({
                        where: {
                            track_name_creator: {
                                track_name: run.track_name,
                                creator: run.creator,
                            },
                        },
                        data: {
                            total_consistency: 0,
                            total_length: 0,
                            total_faults: 0,
                            total_ninja_level: 0,
                        },
                    });
                });

                runs.forEach(async (run) => {
                    await prisma.tracks.update({
                        where: {
                            track_name_creator: {
                                track_name: run.track_name,
                                creator: run.creator,
                            },
                        },
                        data: {
                            total_consistency: {
                                increment: calcConsistency(run.consistency),
                            },
                            total_length: {
                                increment: calcLength(run.length),
                            },
                            total_faults: {
                                increment: run.faults,
                            },
                            total_ninja_level: {
                                increment: run.ninja_level,
                            },
                        },
                    });
                });

                const tracks = await prisma.tracks.findMany({});

                // Average Data for tracks again
                tracks.forEach(async (track) => {
                    const avgConsistency =
                        track.total_consistency / track.nRuns;
                    const avgLength = track.total_length / track.nRuns;
                    const avgFaults = track.total_faults / track.nRuns;
                    const avgNinjaLevel = track.total_ninja_level / track.nRuns;

                    await prisma.tracks.update({
                        where: {
                            track_name_creator: {
                                track_name: track.track_name,
                                creator: track.creator,
                            },
                        },
                        data: {
                            consistency: avgConsistency,

                            length: avgLength,

                            average_faults: avgFaults,

                            ninja_level: avgNinjaLevel,
                        },
                    });
                });
            },
            null,
            true,
            "America/Los_Angeles"
        );

        //job.start();
    } catch (error) {
        console.log(error);
    }
};

const calcLength = (runLength) => {
    if (runLength == "Long") {
        return 1.75;
    } else if (runLength == "Medium") {
        return 1.4;
    } else {
        return 1.1;
    }
};

const calcConsistency = (runConsistency) => {
    if (runConsistency == "Not_At_All") {
        return 2.3;
    } else if (runConsistency == "Not_Very") {
        return 2;
    } else if (runConsistency == "Moderately") {
        return 1.6;
    } else if (runConsistency == "Very") {
        return 1.2;
    } else {
        return 0.9;
    }
};

module.exports = UpdateTracks;
