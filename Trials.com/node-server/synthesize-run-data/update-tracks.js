const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * This is a dangerous update. It mutates values. We should change this to not mutate values
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
                        ninja_points: true,
                    },
                });

                await updateTrackTotals(runs);

                const tracks = await prisma.tracks.findMany({});

                await updateTrackAvgs(tracks);
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

const updateTrackAvgs = async (tracks) => {
    // Average Data for tracks again

    for (const track of tracks) {
        try {
            if (track.nRuns !== 0) {
                const avgConsistency = track.total_consistency / track.nRuns;
                const avgLength = track.total_length / track.nRuns;
                const avgFaults = track.total_faults / track.nRuns;
                const avgNinjaLevel = track.total_ninja_level / track.nRuns;
                const avgNP = track.total_np / track.nRuns;

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
                        average_np: avgNP,
                    },
                });
            } else {
                await prisma.tracks.delete({
                    where: {
                        track_name_creator: {
                            track_name: track.track_name,
                            creator: track.creator,
                        },
                    },
                });
            }
        } catch (error) {
            console.error(error);
        }
    }
};

const updateTrackTotals = async (runs) => {
    try {
        await prisma.tracks.updateMany({
            data: {
                total_consistency: 0,
                total_length: 0,
                total_faults: 0,
                total_ninja_level: 0,
                total_np: 0,
            },
        });
    } catch (error) {
        console.error(error);
    }

    for (const run of runs) {
        try {
            const consistency = calcConsistency(run.consistency);
            const length = calcLength(run.length);

            await prisma.tracks.update({
                where: {
                    track_name_creator: {
                        track_name: run.track_name,
                        creator: run.creator,
                    },
                },
                data: {
                    total_consistency: {
                        increment: consistency,
                    },
                    total_length: {
                        increment: length,
                    },
                    total_faults: {
                        increment: run.faults,
                    },
                    total_ninja_level: {
                        increment: run.ninja_level,
                    },
                    total_np: {
                        increment: run.ninja_points,
                    },
                },
            });
        } catch (error) {
            console.error(error);
        }
    }
    return true;
};

const calcLength = (runLength) => {
    if (runLength === "Long") {
        return 1.75;
    } else if (runLength === "Medium") {
        return 1.4;
    } else {
        return 1.1;
    }
};

const calcConsistency = (runConsistency) => {
    if (runConsistency === "Not_At_All") {
        return 2.3;
    } else if (runConsistency === "Not_Very") {
        return 2;
    } else if (runConsistency === "Moderately") {
        return 1.6;
    } else if (runConsistency === "Very") {
        return 1.2;
    } else {
        return 0.9;
    }
};

module.exports = UpdateTracks;
