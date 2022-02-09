const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const getHighestLevelPass = async (riderID) => {
    try {
        const highestLevelPasses = await prisma.runs.aggregate({
            where: {
                id: riderID,
            },
            orderBy: {
                ninja_points: "desc",
            },
            _max: {
                ninja_level: true,
            },
        });

        return highestLevelPasses._max.ninja_level;
    } catch (error) {
        console.log(error);
    }
};
module.exports = getHighestLevelPass;
