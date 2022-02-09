const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const getBestRuns = async (riderID) => {
    const bestRuns = await prisma.runs.aggregate({
        where: {
            id: riderID,
        },
        orderBy: {
            ninja_points: "desc",
        },
        _max: {
            ninja_points: true,
        },
    });

    return Math.round(bestRuns._max.ninja_points);
};
module.exports = getBestRuns;
