const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const BackupLeaderboards = async () => {
    var CronJob = require("cron").CronJob;
    var job = new CronJob(
        "0 0 0 * * *",
        async function () {
            var copyTable = await prisma.profiles.findMany();

            await prisma.profileshistory.createMany({
                data: copyTable,
            });

            copyTable = await prisma.runs.findMany();

            await prisma.runshistory.createMany({
                data: copyTable,
            });

            copyTable = await prisma.tracks.findMany();

            await prisma.trackshistory.createMany({
                data: copyTable,
            });
        },
        null,
        true,
        "America/Los_Angeles"
    );
    job.start();

    // const result = await prisma.$queryRawUnsafe(`INSERT INTO
    // ${profilesHistory}(email,id,create_date,country,state,gamertag,aliases,username,${highestNPRun},runs,${totalNinjaPoints},${highestLevelPass},bio,${historyDates})
    // select *, CURRENT_TIMESTAMP as ${historyDates}
    // from${profiles}`);
};

module.exports = BackupLeaderboards;
