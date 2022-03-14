const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = (app) => {
    app.post("/get-run", async (request, response) => {
        try {
            await prisma.runs.findFirst({
                where: {
                    track_name: request.body.track_name,
                    creator: request.body.creator,
                    rider: request.body.rider,
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
