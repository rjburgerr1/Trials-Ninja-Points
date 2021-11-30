const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = (app) => {
    app.get("/track-info", async (request, response) => {
        try {
            let result;
            if (request.query !== undefined) {
                result = await prisma.tracks.findUnique({
                    where: {
                        track_name_creator: {
                            track_name: request.query.trackName,
                            creator: request.query.creator,
                        },
                    },
                });
            }
            return response.status(200).send(result);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });
};
// Export the router
module.exports = router;
