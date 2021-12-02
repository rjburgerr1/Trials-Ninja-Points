const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const synthesizeData = async (newRun) => {
    let currentTrackData = await prisma.tracks.findFirst({
        where: {
            track_name: newRun.trackName,
            creator: newRun.creator,
        },
        select: {
            ninja_level: true,
            length: true,
            average_faults: true,
            consistency: true,
            rating: true,
            total_rating: true,
            total_consistency: true,
            total_faults: true,
            total_length: true,
            total_ninja_level: true,
            total_np: true,
            nRuns: true,
        },
    });

    // Update Rating
    mergeNewRunData(
        newRun,
        currentTrackData,
        "rating",
        currentTrackData.total_rating
    );
    // Update Consistency
    mergeNewRunData(
        newRun,
        currentTrackData,
        "consistency",
        currentTrackData.total_consistency
    );
    // Update Length
    mergeNewRunData(
        newRun,
        currentTrackData,
        "length",
        currentTrackData.total_length
    );
    // Update Ninja Level
    mergeNewRunData(
        newRun,
        currentTrackData,
        "ninja_level",
        currentTrackData.total_ninja_level
    );
    // Update Average Faults
    mergeNewRunData(
        newRun,
        currentTrackData,
        "average_faults",
        currentTrackData.total_faults
    );
    // Update Average NP
    mergeNewRunData(
        newRun,
        currentTrackData,
        "average_np",
        currentTrackData.total_np
    );
};

const mergeNewRunData = async (
    newRun,
    currentTrackData,
    fieldToUpdate,
    fieldToUpdatesTotal
) => {
    let updatedValue =
        Number(fieldToUpdatesTotal) / Number(currentTrackData.nRuns);

    let updatedObj = {};
    updatedObj[fieldToUpdate] = updatedValue;

    await prisma.tracks.update({
        where: {
            track_name_creator: {
                track_name: newRun.trackName,
                creator: newRun.creator,
            },
        },
        data: updatedObj,
    });
};

module.exports = synthesizeData;
