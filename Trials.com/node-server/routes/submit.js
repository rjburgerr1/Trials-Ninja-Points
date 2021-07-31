const {
    PrismaClient,
} = require("../../react-frontend/node_modules/.prisma/client");
const prisma = new PrismaClient();
// const { request } = require("express"); Keep for now, might need later

const router = (app) => {
    // Add a new run
    // ` (grave) for column and ' (apostrophe) for values for syntax fun :)
    //Name attribute in form element sets "'gamertag', and 'rank' etc...." name = ninjaLevel === request.body.ninjaLevel
    //Format:
    //sql: "INSERT INTO runs SET `gamertag` = 'efwef', `rank` = 'wefwef', `faults` = 'wefwe', `time` = 'fwefwef', `track-name` = 'wefwef', `ninja-points` = 'wefwef'"

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
            return response.sendStatus(200);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });
};
// Export the router
module.exports = router;
