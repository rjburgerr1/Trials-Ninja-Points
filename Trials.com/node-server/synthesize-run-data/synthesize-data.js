const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const averageNewRunData = require("./average-new-run-data");

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
    await averageNewRunData(
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
    await averageNewRunData(
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
    await averageNewRunData(
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
    await averageNewRunData(
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
    await averageNewRunData(
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
    await averageNewRunData(
        currentCreatorData.nTracks,
        "average_track_rating",
        currentCreatorData.total_track_rating,
        prisma.creators,
        {
            creator: newRun.creator,
        }
    );
    // Update Consistency
    await averageNewRunData(
        currentCreatorData.nTracks,
        "average_track_length",
        currentCreatorData.total_track_length,
        prisma.creators,
        {
            creator: newRun.creator,
        }
    );
    // Update Length
    await averageNewRunData(
        currentCreatorData.nTracks,
        "average_track_consistency",
        currentCreatorData.total_track_consistency,
        prisma.creators,
        {
            creator: newRun.creator,
        }
    );
    // Update Ninja Level
    await averageNewRunData(
        currentCreatorData.nTracks,
        "average_track_ninja_level",
        currentCreatorData.total_track_ninja_level,
        prisma.creators,
        {
            creator: newRun.creator,
        }
    );

    // Update Average NP
    await averageNewRunData(
        currentCreatorData.nTracks,
        "average_track_faults",
        currentCreatorData.total_track_faults,
        prisma.creators,
        {
            creator: newRun.creator,
        }
    );
};

module.exports = synthesizeData;
