const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const synthesizeData = require("../synthesize-run-data/synthesize-data");

const router = (app) => {
    app.post("/submit-run", async (request, response) => {
        // Convert specific fields to number, before insertion in db
        request.body.faults = Number(request.body.faults);
        request.body.rank = Number(request.body.rank);
        request.body.ninjaLevel = Number(request.body.ninjaLevel);
        request.body.rating = Number(request.body.rating);
        request.body.ninjaPoints = Number(request.body.ninjaPoints);
        const run = { ...request.body };

        try {
            await prisma.runs.create({
                data: {
                    rank: run.rank,
                    faults: run.faults,
                    time: run.time,
                    video: run.video,
                    ninja_level: run.ninjaLevel,
                    length: run.length,
                    consistency: run.consistency,
                    rating: run.rating,
                    rider: run.rider.displayName,
                    id: run.rider.uid,
                    creators: {
                        connectOrCreate: {
                            where: { creator: run.creator },
                            create: { creator: run.creator },
                        },
                    },
                    tracks: {
                        connectOrCreate: {
                            where: {
                                track_name_creator: {
                                    track_name: run.trackName,
                                    creator: run.creator,
                                },
                            },
                            create: {
                                track_name: run.trackName,
                                creator: run.creator,
                            },
                        },
                    },
                }, // map run fields over data property
            });

            length = calcLength(run.length);
            consistency = calcConsistency(run.consistency);

            await prisma.tracks.update({
                where: {
                    track_name_creator: {
                        track_name: run.trackName,
                        creator: run.creator,
                    },
                },
                data: {
                    nRuns: {
                        increment: 1,
                    },
                    total_rating: {
                        increment: run.rating,
                    },
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
                        increment: run.ninjaLevel,
                    },
                },
            });

            await prisma.creators.update({
                where: {
                    creator: run.creator,
                },
                data: {
                    nTracks: {
                        increment: 1,
                    },
                    total_track_rating: {
                        increment: run.rating,
                    },
                    total_track_consistency: {
                        increment: consistency,
                    },
                    total_track_length: {
                        increment: length,
                    },
                    total_track_faults: {
                        increment: run.faults,
                    },
                    total_track_ninja_level: {
                        increment: run.ninjaLevel,
                    },
                    total_track_ninja_points: {
                        increment: run.ninjaPoints,
                    },
                },
            });

            synthesizeData(run);

            return response.sendStatus(200);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });
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

// Export the router
module.exports = router;
