const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const getHighestLevelPass = async (rider) => {
    const highestLevelPasses = await prisma.runs.aggregate({
        where: {
            id: rider.uid,
        },
        orderBy: {
            ninja_points: "desc",
        },
        _max: {
            ninja_level: true,
        },
    });

    return Math.round(highestLevelPasses._max.ninja_level);
};
module.exports = getHighestLevelPass;
