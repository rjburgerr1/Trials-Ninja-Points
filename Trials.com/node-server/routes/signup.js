const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = (app) => {
    // Add a profile to the databasewhen signup is successful
    app.post("/sign-up-complete", async (request, response) => {
        try {
            await prisma.profiles.create({
                data: {
                    email: request.body.email,
                    username: request.body.username,
                    id: request.body.userid,
                },
            });
            return response.sendStatus(200);
        } catch (error) {
            console.log(error);
            return response.status(400).send(error);
        }
    });

    app.get("/does-username-exist", async (request, response) => {
        try {
            await prisma.profiles.findFirst({
                where: {
                    username: request.query.username,
                },
            });
            return response.sendStatus(200);
        } catch (error) {
            console.log(error);
            return response.status(400).send(error);
        }
    });
};
// Export the router
module.exports = router;
