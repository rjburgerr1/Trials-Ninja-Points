const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * This function merges new run data with existing track data
 * Updating values by averaging existing run data with the new run given
 * and spitting out a track's newly averaged fields like length, ninjaLevel
 * @param {*} newRun
 */
const synthesizeData = async (newRun) => {
    let currentTrackData = await prisma.tracks.findFirst({
        where: {
            track_name: newRun.trackName,
            creator: newRun.creator,
        },
    });

    // Update Rating
    averageNewRunData(
        currentTrackData.nRuns,
        "rating",
        currentTrackData.total_rating,
        prisma.tracks,
        {
            track_name_creator: {
                track_name: newRun.trackName,
                creator: newRun.creator,
            },
        }
    );
    // Update Consistency
    averageNewRunData(
        currentTrackData.nRuns,
        "consistency",
        currentTrackData.total_consistency,
        prisma.tracks,
        {
            track_name_creator: {
                track_name: newRun.trackName,
                creator: newRun.creator,
            },
        }
    );
    // Update Length
    averageNewRunData(
        currentTrackData.nRuns,
        "length",
        currentTrackData.total_length,
        prisma.tracks,
        {
            track_name_creator: {
                track_name: newRun.trackName,
                creator: newRun.creator,
            },
        }
    );
    // Update Ninja Level
    averageNewRunData(
        currentTrackData.nRuns,
        "ninja_level",
        currentTrackData.total_ninja_level,
        prisma.tracks,
        {
            track_name_creator: {
                track_name: newRun.trackName,
                creator: newRun.creator,
            },
        }
    );
    // Update Average Faults
    averageNewRunData(
        currentTrackData.nRuns,
        "average_faults",
        currentTrackData.total_faults,
        prisma.tracks,
        {
            track_name_creator: {
                track_name: newRun.trackName,
                creator: newRun.creator,
            },
        }
    );
    // Update Average NP
    averageNewRunData(
        currentTrackData.nRuns,
        "average_np",
        currentTrackData.total_np,
        prisma.tracks,
        {
            track_name_creator: {
                track_name: newRun.trackName,
                creator: newRun.creator,
            },
        }
    );

    let currentCreatorData = await prisma.creators.findFirst({
        where: {
            creator: newRun.creator,
        },
        select: {
            average_track_ninja_level: true,
            average_track_length: true,
            average_track_faults: true,
            average_track_rating: true,
            average_track_consistency: true,
            average_track_ninja_points: true,
            total_track_ninja_level: true,
            total_track_length: true,
            total_track_faults: true,
            total_track_rating: true,
            total_track_consistency: true,
            total_track_ninja_points: true,
            nTracks: true,
        },
    });

    // Update Rating
    averageNewRunData(
        currentCreatorData.nTracks,
        "average_track_rating",
        currentCreatorData.total_track_rating,
        prisma.creators,
        {
            creator: newRun.creator,
        }
    );
    // Update Consistency
    averageNewRunData(
        currentCreatorData.nTracks,
        "average_track_length",
        currentCreatorData.total_track_length,
        prisma.creators,
        {
            creator: newRun.creator,
        }
    );
    // Update Length
    averageNewRunData(
        currentCreatorData.nTracks,
        "average_track_consistency",
        currentCreatorData.total_track_consistency,
        prisma.creators,
        {
            creator: newRun.creator,
        }
    );
    // Update Ninja Level
    averageNewRunData(
        currentCreatorData.nTracks,
        "average_track_ninja_level",
        currentCreatorData.total_track_ninja_level,
        prisma.creators,
        {
            creator: newRun.creator,
        }
    );
    // Update Average Faults
    averageNewRunData(
        currentCreatorData.nTracks,
        "average_track_ninja_points",
        currentCreatorData.total_track_ninja_points,
        prisma.creators,
        {
            creator: newRun.creator,
        }
    );
    // Update Average NP
    averageNewRunData(
        currentCreatorData.nTracks,
        "average_track_faults",
        currentCreatorData.total_track_faults,
        prisma.creators,
        {
            creator: newRun.creator,
        }
    );
};

const averageNewRunData = async (
    nField,
    fieldToUpdate,
    fieldToUpdatesTotal,
    tableToUpdate,
    whereCondition
) => {
    let updatedValue = Number(fieldToUpdatesTotal) / Number(nField);

    let updatedObj = {};
    updatedObj[fieldToUpdate] = updatedValue;

    await tableToUpdate.update({
        where: whereCondition,
        data: updatedObj,
    });
};

module.exports = synthesizeData;
