const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const synthesizeData = require("../synthesize-run-data/synthesize-data");
const { calcLength, calcConsistency } = require("../helpers/convert-enums");

const router = (app) => {
    app.post("/edit-run", async (request, response) => {
        // Convert specific fields to number, before insertion in db
        request.body.faults = Number(request.body.faults);
        request.body.rank = Number(request.body.rank);
        request.body.ninjaLevel = Number(request.body.ninjaLevel);
        request.body.rating = Number(request.body.rating);
        request.body.ninjaPoints = Number(request.body.ninjaPoints);

        const run = { ...request.body };

        try {
            await prisma.runs.update({
                where: {
                    track_name_id_creator: {
                        id: run.id,
                        creator: run.state.creator,
                        track_name: run.state.track,
                    },
                },
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
                    id: run.id,
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

            // Convert enums
            let oldLength = calcLength(run.state.length);
            let oldConsistency = calcConsistency(run.state.length);
            let newLength = calcLength(run.length);
            let newConsistency = calcConsistency(run.consistency);

            // These values are used to update current values for enums
            // Create an offset to increment/decrement values by
            const lengthOffset = newLength - oldLength;
            const consistencyOffset = newConsistency - oldConsistency;
            const ratingOffset = run.rating - run.state.rating;
            const ninjaLevelOffset = run.ninjaLevel - run.state.ninjaLevel;
            const faultsOffset = run.faults - run.state.faults;

            let nRunsOffset;
            if (
                run.state.track === run.trackName &&
                run.state.creator === run.creator
            ) {
                nRunsOffset = 0;
            } else {
                nRunsOffset = 1;

                // If the track name and/or creator changes,
                // that means that the number of runs for the old run's track
                // needs to be reduced by 1
                await prisma.tracks.update({
                    where: {
                        track_name_creator: {
                            track_name: run.state.track,
                            creator: run.state.creator,
                        },
                    },
                    data: {
                        nRuns: {
                            increment: -nRunsOffset,
                        },
                    },
                });
            }

            await prisma.tracks.update({
                where: {
                    track_name_creator: {
                        track_name: run.trackName,
                        creator: run.creator,
                    },
                },
                data: {
                    nRuns: {
                        increment: nRunsOffset,
                    },
                    total_rating: {
                        increment: ratingOffset,
                    },
                    total_consistency: {
                        increment: consistencyOffset,
                    },
                    total_length: {
                        increment: lengthOffset,
                    },
                    total_faults: {
                        increment: faultsOffset,
                    },
                    total_ninja_level: {
                        increment: ninjaLevelOffset,
                    },
                },
            });

            await prisma.creators.update({
                where: {
                    creator: run.creator,
                },
                data: {
                    nTracks: {
                        increment: nRunsOffset,
                    },
                    total_track_rating: {
                        increment: ratingOffset,
                    },
                    total_track_consistency: {
                        increment: consistencyOffset,
                    },
                    total_track_length: {
                        increment: lengthOffset,
                    },
                    total_track_faults: {
                        increment: faultsOffset,
                    },
                    total_track_ninja_level: {
                        increment: ninjaLevelOffset,
                    },
                },
            });

            await synthesizeData(run);

            return response.sendStatus(200);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });
};

// Export the router
module.exports = router;
