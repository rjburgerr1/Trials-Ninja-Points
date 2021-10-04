const {
    PrismaClient,
} = require("../../react-frontend/node_modules/.prisma/client");
const prisma = new PrismaClient();
const synthesizeData = require("../synthesize-run-data/synthesize-data");
// const { request } = require("express"); Keep for now, might need later

const router = (app) => {
    app.post("/submitted-run", async (request, response) => {
        // For some reason that I cannot seem to figure out. request.body returns an object with key value pairs from the submit form
        // and all of the values are strings even if they were not strings in the form

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
                    ninja_points: run.ninjaPoints,
                    ninja_level: run.ninjaLevel,
                    length: run.length,
                    fault_sponginess: run.faultSponginess,
                    rating: run.rating,
                    riders: {
                        connectOrCreate: {
                            where: { rider: run.rider },
                            create: { rider: run.rider },
                        },
                    },
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
            fault_sponginess = calcFaultSponginess(run.faultSponginess);

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
                    total_fault_sponginess: {
                        increment: fault_sponginess,
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

            synthesizeData(run);

            return response.sendStatus(200);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });
};

const calcLength = (runLength) => {
    if (runLength == "Medium") {
        return 2;
    } else if (runLength == "Long") {
        return 3;
    } else {
        return 1;
    }
};

const calcFaultSponginess = (runFaultSponginess) => {
    if (runFaultSponginess == "Not_At_All") {
        return 1;
    } else if (runFaultSponginess == "Not_Very") {
        return 2;
    } else if (runFaultSponginess == "Moderately") {
        return 3;
    } else if (runFaultSponginess == "Very") {
        return 4;
    } else {
        return 5;
    }
};

// Export the router
module.exports = router;
