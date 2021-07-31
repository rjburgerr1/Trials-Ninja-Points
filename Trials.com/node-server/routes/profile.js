const {
    PrismaClient,
} = require("../../react-frontend/node_modules/.prisma/client");
const prisma = new PrismaClient();

const router = (app) => {
    app.get("/username", async (request, response) => {
        try {
            let result = await prisma.profiles.findUnique({
                select: { username: true },
                where: {
                    id: request.query.id,
                },
            });

            return response.status(200).send(result);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });

    app.get("/bio", async (request, response) => {
        try {
            let result = await prisma.profiles.findUnique({
                select: { bio: true },
                where: {
                    id: request.query.uid,
                },
            });

            return response.status(200).send(result);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });

    app.get("/country", async (request, response) => {
        try {
            let result = await prisma.profiles.findUnique({
                select: { country: true },
                where: {
                    id: request.query.uid,
                },
            });

            return response.status(200).send(result);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });

    app.get("/number-of-runs", async (request, response) => {
        try {
            let result = await prisma.profiles.findUnique({
                select: { runs: true },
                where: {
                    id: request.query.uid,
                },
            });

            return response.status(200).send(result);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });

    app.get("/highest-np-run", async (request, response) => {
        try {
            let result = await prisma.profiles.findUnique({
                select: { highest_np_run: true },
                where: {
                    id: request.query.uid,
                },
            });

            return response.status(200).send(result);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });

    app.get("/rank", async (request, response) => {
        try {
            let result = await prisma.profiles.findUnique({
                select: { rank: true },
                where: {
                    id: request.query.uid,
                },
            });

            return response.status(200).send(result);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });

    app.get("/total-np", async (request, response) => {
        try {
            let result = await prisma.profiles.findUnique({
                select: { total_ninja_points: true },
                where: {
                    id: request.query.uid,
                },
            });
            return response.status(200).send(result);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });
    app.get("/create-date", async (request, response) => {
        try {
            let result = await prisma.profiles.findUnique({
                select: { create_date: true },
                where: {
                    id: request.query.uid,
                },
            });
            return response.status(200).send(result);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });
    app.get("/highest-level-pass", async (request, response) => {
        try {
            let result = await prisma.profiles.findUnique({
                select: { highest_level_pass: true },
                where: {
                    id: request.query.uid,
                },
            });
            return response.status(200).send(result);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });

    app.get("/aliases", async (request, response) => {
        try {
            let result = await prisma.profiles.findUnique({
                select: { aliases: true },
                where: {
                    id: request.query.uid,
                },
            });
            return response.status(200).send(result);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });

    app.get("/profile-info", async (request, response) => {
        try {
            let result;
            if (request.query.id !== undefined) {
                result = await prisma.profiles.findUnique({
                    where: {
                        id: request.query.id,
                    },
                });
            } else {
                result = await prisma.profiles.findFirst({
                    where: {
                        username: request.query.username,
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
