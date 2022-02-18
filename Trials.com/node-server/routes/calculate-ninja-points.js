const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const CalcNP = require("../synthesize-run-data/calculate-ninja-points");
const synthesizeData = require("../synthesize-run-data/synthesize-data");

const averageNewRunData = require("../synthesize-run-data/average-new-run-data");
const getTopRuns = require("../synthesize-run-data/get-top-runs");
const getBestRuns = require("../synthesize-run-data/get-best-run");
const getHighestLevelPass = require("../synthesize-run-data/get-highest-pass");

const router = (app) => {
    app.post("/calculate-ninja-points", async (request, response) => {
        try {
            let run = { ...request.body };
            await synthesizeData(run); // Update track data before calculating true ninja points

            run.ninjaPoints = await CalcNP(request.body);

            await prisma.tracks.update({
                where: {
                    track_name_creator: {
                        track_name: run.trackName,
                        creator: run.creator,
                    },
                },
                data: {
                    total_np: {
                        increment: run.ninjaPoints,
                    },
                },
            });

            await prisma.creators.update({
                where: {
                    creator: run.creator,
                },
                data: {
                    total_track_ninja_points: {
                        increment: run.ninjaPoints,
                    },
                },
            });

            await prisma.runs.update({
                where: {
                    track_name_id_creator: {
                        id: run.rider.uid,
                        creator: run.creator,
                        track_name: run.trackName,
                    },
                },
                data: {
                    ninja_points: run.ninjaPoints,
                }, // map run fields over data property
            });

            const top100Runs = await getTopRuns(run.rider.uid);
            const bestNP = await getBestRuns(run.rider.uid);
            const highestLevelPass = await getHighestLevelPass(run.rider.uid);

            await prisma.profiles.update({
                where: {
                    id: run.rider.uid,
                },
                data: {
                    runs: {
                        increment: 1,
                    },
                    total_ninja_points: {
                        increment: Math.round(run.ninjaPoints),
                    },
                    top_100_runs: top100Runs,
                    highest_np_run: bestNP,
                    highest_level_pass: highestLevelPass,
                },
            });

            let currentTrackData = await prisma.tracks.findFirst({
                where: {
                    track_name: run.trackName,
                    creator: run.creator,
                },
            });

            // Update Average NP
            averageNewRunData(
                currentTrackData.nRuns,
                "average_np",
                currentTrackData.total_np,
                prisma.tracks,
                {
                    track_name_creator: {
                        track_name: run.trackName,
                        creator: run.creator,
                    },
                }
            );

            let currentCreatorData = await prisma.creators.findFirst({
                where: {
                    creator: run.creator,
                },
                select: {
                    total_track_ninja_points: true,
                    nTracks: true,
                },
            });

            // Update Average Track NP
            averageNewRunData(
                currentCreatorData.nTracks,
                "average_track_ninja_points",
                currentCreatorData.total_track_ninja_points,
                prisma.creators,
                {
                    creator: run.creator,
                }
            );

            return response.json({ ninjaPoints: run.ninjaPoints });
        } catch (error) {
            console.log(error);
            return response.status(400).send("BAD REQUEST");
        }
    });
};

// Export the router
module.exports = router;
