const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const CalcNP = require("../synthesize-run-data/calculate-ninja-points");
const synthesizeData = require("../synthesize-run-data/synthesize-data");

const router = (app) => {
    app.post("/calculate-ninja-points", async (request, response) => {
        try {
            const run = { ...request.body };
            await synthesizeData(run); // Update track data before calculating true ninja points

            let trackMetric = await prisma.tracks.findUnique({
                where: {
                    track_name_creator: {
                        track_name: request.body.trackName,
                        creator: request.body.creator,
                    },
                },
                select: {
                    creator: true,
                    track_name: true,
                    length: true,
                    consistency: true,
                    ninja_level: true,
                },
            });

            let result = await CalcNP(request.body);

            await prisma.tracks.update({
                where: {
                    track_name_creator: {
                        track_name: run.trackName,
                        creator: run.creator,
                    },
                },
                data: {
                    total_np: {
                        increment: run.ninjaPoints,
                    },
                },
            });

            await prisma.runs.update({
                where: {
                    track_name_id_creator: {
                        id: run.rider.uid,
                        creator: run.creator,
                        track_name: run.trackName,
                    },
                },
                data: {
                    ninja_points: result,
                }, // map run fields over data property
            });

            return response.json({ ninjaPoints: result });
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });
};

// Export the router
module.exports = router;