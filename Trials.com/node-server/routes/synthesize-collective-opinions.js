const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * OLD FILE, POSSIBLY USEFUL FOR REFERENCE IN THE FUTURE.
 * CHANGED TO MORE EFFICIENT WAY OF UPDATING AGGREGATE VALUES -> synthesize-data.js
 */

const router = () => {
    /*
    var CronJob = require("../../react-frontend/node_modules/cron").CronJob;
    var job = new CronJob(
        "0 * * * * *",
        synthesizeTrackData(),
        null,
        true,
        "America/Los_Angeles"
    );
    */
};

const synthesizeTrackData = async () => {
    data = await prisma.runs.findMany({
        orderBy: { track_name: "asc" },
    });

    groupedData = data.reduce(function (data, obj) {
        data[obj.track_name] = data[obj.track_name] || [];
        data[obj.track_name].push(obj);
        return data;
    }, Object.create(null));

    // Probably not the best way to go about synthesizing this data. Will probably have to change it in a long time from now...
    payload = await avgLength(groupedData);
    payload = await avgConsistency(groupedData);
    payload = await avgFaults(groupedData);
    payload = await avgRating(groupedData);
    payload = await avgNJLevel(groupedData);
    payload = await avgNP(groupedData);

    setTrackStats(payload);
};

const setTrackStats = async (data) => {
    keys = Object.keys(data);
    for (const key in data) {
        let track = data[key][0].track_name;
        let creator = data[key][0].creator;

        await prisma.tracks.update({
            where: {
                track_name_creator: { track_name: track, creator: creator },
            },
            data: {
                length: data[key].avgLength,
                consistency: data[key].avgConsistency,
                average_faults: data[key].avgFaults,
                rating: data[key].avgRating,
                ninja_level: data[key].avgNinjaLevel,
                average_np: data[key].avgNinjaPoints,
            },
        });
    }
};

const avgLength = async (data) => {
    Object.keys(data).forEach((key) => {
        let count = groupedData[key].length;
        let sum = 0;
        data[key].forEach((obj) => {
            if (obj.length == "Medium") {
                sum += 2;
            } else if (obj.length == "Long") {
                sum += 3;
            } else {
                sum += 1;
            }
        });

        let avgLength = sum / count;
        data[key].avgLength = avgLength;
    });

    return data;
};

const avgConsistency = async (data) => {
    Object.keys(data).forEach((key) => {
        let count = data[key].length;
        let sum = 0;
        data[key].forEach((obj) => {
            if (obj.consistency == "Not_At_All") {
                sum += 1;
            } else if (obj.consistency == "Not_Very") {
                sum += 2;
            } else if (obj.consistency == "Moderately") {
                sum += 3;
            } else if (obj.consistency == "Very") {
                sum += 4;
            } else {
                sum += 5;
            }
        });

        let avgConsistency = sum / count;

        data[key].avgConsistency = avgConsistency;
    });
    return data;
};

const avgRating = async (data) => {
    Object.keys(data).forEach((key) => {
        let count = data[key].length;
        let sum = 0;
        data[key].forEach((obj) => {
            sum += Number(obj.rating);
        });

        let avgRating = sum / count;

        data[key].avgRating = avgRating;
    });
    return data;
};

const avgFaults = async (data) => {
    Object.keys(data).forEach((key) => {
        let count = data[key].length;
        let sum = 0;
        data[key].forEach((obj) => {
            sum += Number(obj.faults);
        });

        let avgFaults = sum / count;

        data[key].avgFaults = avgFaults;
    });
    return data;
};

const avgNJLevel = async (data) => {
    Object.keys(data).forEach((key) => {
        let count = data[key].length;
        let sum = 0;

        data[key].forEach((obj) => {
            sum += Number(obj.ninja_level);
        });

        let avgNinjaLevel = sum / count;

        data[key].avgNinjaLevel = avgNinjaLevel;
    });

    return data;
};

const avgNP = async (data) => {
    Object.keys(data).forEach((key) => {
        let count = data[key].ninjaPoints;
        let sum = 0;

        data[key].forEach((obj) => {
            sum += Number(obj.ninja_points);
        });

        let avgNinjaPoints = sum / count;

        data[key].avgNinjaPoints = avgNinjaPoints;
    });

    return data;
};

// Export the router
module.exports = router;
