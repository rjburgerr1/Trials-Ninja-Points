const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const synthesizeData = require("../synthesize-run-data/synthesize-data");
const { calcLength, calcConsistency } = require("../helpers/convert-enums");

const router = (app) => {
    app.post("/delete-run", async (request, response) => {
        const run = { ...request.body };

        try {
            await prisma.runs.delete({
                where: {
                    track_name_id_creator: {
                        id: run.id,
                        creator: run.creator,
                        track_name: run.track,
                    },
                },
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
