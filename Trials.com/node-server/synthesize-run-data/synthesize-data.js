const {
    PrismaClient,
} = require("../../react-frontend/node_modules/.prisma/client");
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
            fault_sponginess: true,
            rating: true,
            total_rating: true,
            total_fault_sponginess: true,
            total_faults: true,
            total_length: true,
            total_ninja_level: true,
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
    // Update Fault Sponginess
    mergeNewRunData(
        newRun,
        currentTrackData,
        "fault_sponginess",
        currentTrackData.total_fault_sponginess
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
