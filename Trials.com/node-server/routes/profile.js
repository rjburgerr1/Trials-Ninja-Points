const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const AWS = require("aws-sdk");

const router = (app) => {
    app.get("/profile-banner", async (request, response) => {
        try {
            return response.status(200).send(result);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });

    app.put("/email", async (request, response) => {
        try {
            const result = await prisma.profiles.update({
                where: {
                    id: request.body.id,
                },
                data: {
                    email: request.body.email,
                },
            });

            return response.status(200).send(result);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });

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

    app.put("/username", async (request, response) => {
        try {
            const result = await prisma.profiles.update({
                where: {
                    id: request.body.id,
                },
                data: {
                    username: request.body.username,
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

    app.put("/bio", async (request, response) => {
        try {
            const result = await prisma.profiles.update({
                where: {
                    id: request.body.id,
                },
                data: {
                    bio: request.body.bio,
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

    app.put("/country", async (request, response) => {
        try {
            const result = await prisma.profiles.update({
                where: {
                    id: request.body.id,
                },
                data: {
                    country: request.body.country,
                },
            });

            return response.status(200).send(result);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });

    app.put("/country-region", async (request, response) => {
        try {
            const result = await prisma.profiles.update({
                where: {
                    id: request.body.id,
                },
                data: {
                    country: request.body.country,
                    region: request.body.region,
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

    app.put("/aliases", async (request, response) => {
        try {
            const result = await prisma.profiles.update({
                where: {
                    id: request.body.id,
                },
                data: {
                    aliases: request.body.aliases,
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
