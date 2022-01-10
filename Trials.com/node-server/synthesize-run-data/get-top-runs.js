const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const getTopRuns = async (riderID) => {
    const topRuns = await prisma.runs.aggregate({
        where: {
            id: riderID,
        },

        orderBy: {
            ninja_points: "desc",
        },
        take: 100,
        _sum: {
            ninja_points: true,
        },
        /*
        _count: {
            rider: true, // rider is an arbitrary field we are counting.
            //We are just getting the number of runs a rider has submitted thus far
        },*/
    });

    return Math.round(topRuns._sum.ninja_points);
};
module.exports = getTopRuns;
