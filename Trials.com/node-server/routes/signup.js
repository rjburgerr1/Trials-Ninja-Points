const { PrismaClient } = require("../../react-frontend/prisma/client");
const prisma = new PrismaClient();

const router = (app) => {
    // Add a profile to the databasewhen signup is successful
    app.post("/sign-up-complete", async (request, response) => {
        await prisma.profiles.create({
            data: {
                email: request.body.email,
                username: request.body.username,
                id: request.body.userid,
            },
        });
    });
};
// Export the router
module.exports = router;
