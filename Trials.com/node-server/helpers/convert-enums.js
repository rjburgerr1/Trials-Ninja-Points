const calcLength = (runLength) => {
    if (runLength == "Long") {
        return 1.75;
    } else if (runLength == "Medium") {
        return 1.4;
    } else {
        return 1.1;
    }
};

const calcConsistency = (runConsistency) => {
    if (runConsistency == "Not_At_All") {
        return 2.3;
    } else if (runConsistency == "Not_Very") {
        return 2;
    } else if (runConsistency == "Moderately") {
        return 1.6;
    } else if (runConsistency == "Very") {
        return 1.2;
    } else {
        return 0.9;
    }
};

module.exports.calcConsistency = calcConsistency;
module.exports.calcLength = calcLength;
