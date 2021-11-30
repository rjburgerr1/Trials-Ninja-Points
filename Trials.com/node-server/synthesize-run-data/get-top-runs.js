const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const getTopRuns = async (rider) => {
    const topRuns = await prisma.runs.aggregate({
        where: {
            id: rider.uid,
        },
        orderBy: {
            ninja_points: "desc",
        },
        _sum: {
            ninja_points: true,
        },
        take: 100,
    });

    return Math.round(topRuns._sum.ninja_points);
};
module.exports = getTopRuns;
