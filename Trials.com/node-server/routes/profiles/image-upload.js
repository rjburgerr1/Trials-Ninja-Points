const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = (app) => {
    app.put("/upload-profile-banner", async (request, response) => {
        try {
            let result = await prisma.profiles.update({
                where: {
                    id: request.body.id,
                },
                data: {
                    banner_url: request.body.banner,
                },
            });

            return response.status(200).send(result);
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });
};
// Export the router
module.exports = router;
