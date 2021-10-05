const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = (app) => {
    app.get("/main-leaderboard", async (request, response) => {
        try {
            let result = await prisma.profiles.findMany({
                select: {
                    username: true,
                    country: true,
                    highest_level_pass: true,
                    highest_np_run: true,
                    total_ninja_points: true,
                },
                orderBy: {
                    total_ninja_points: "desc",
                },
            });
            return response.status(200).send(result);
        } catch (error) {
            console.log(error.message);
            return response.status(400).send("BAD REQUEST");
        }
    });
    app.get("/runs-leaderboard", async (request, response) => {
        try {
            let result = await prisma.runs.findMany({});

            return response.status(200).send(result);
        } catch (error) {
            console.log(error.message);
            return response.status(400).send("BAD REQUEST");
        }
    });
    app.get("/tracks-leaderboard", async (request, response) => {
        try {
            let result = await prisma.tracks.findMany({});

            return response.status(200).send(result);
        } catch (error) {
            console.log(error.message);
            return response.status(400).send("BAD REQUEST");
        }
    });
};
// Export the router
module.exports = router;
