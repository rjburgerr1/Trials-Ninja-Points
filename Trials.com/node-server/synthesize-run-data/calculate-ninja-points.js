function CalcNP(props) {
    // This isn't too elegant but currently we will check
    // if the consistency and length props coming in
    // are a number or not to differentiate if they are
    // either the opinion value or an actual weight already
    // E.g. "Not_At_All" or "1.51". In the second case, we
    // do not need to convert the value

    // The reason this is necessary for now is that we store
    // all "true" values in the tracks tables as numbers
    // and not their original value

    try {
        const consistencyWeight = isNaN(props.consistency)
            ? CalcConsistencyWeight(props.consistency)
            : props.consistency;

        const lengthWeight = isNaN(props.length)
            ? CalcLengthWeight(props.length)
            : props.length;

        const timeWeight = CalcTimeWeight(props.time);

        const ninjaLevelWeight = CalcNinjaLevelWeight(
            props.ninja_level || props.ninjaLevel
        );

        const faultWeight = CalcFaultWeight(props.faults);

        // console.log(
        //     "consistency: " +
        //         consistencyWeight +
        //         " \ntime: " +
        //         timeWeight +
        //         " \n ninjalevel: " +
        //         ninjaLevelWeight +
        //         " \n  length: " +
        //         lengthWeight +
        //         " \n fault: " +
        //         faultWeight +
        //         "\n \n"
        // );

        const ninjaPoints =
            consistencyWeight *
            timeWeight *
            ninjaLevelWeight *
            lengthWeight *
            faultWeight *
            1.3;

        return ninjaPoints;
    } catch (error) {
        return error;
    }
}

const CalcFaultWeight = (faults) => {
    // faults is garnered from calculate-ninja-points props
    let faultWeight = Math.log(Number(faults) + 10) / Math.log(0.2) + 6;
    return faultWeight;
};

const CalcLengthWeight = (length) => {
    // length is garnered from calculate-ninja-points props
    switch (length) {
        case "Short":
            return 1.1;
        case "Medium":
            return 1.4;
        case "Long":
            return 1.75;
        default:
            return 0;
    }
};

const CalcNinjaLevelWeight = (ninjaLevel) => {
    // ninjaLevel is garnered from calculate-ninja-points props
    const ninjaLevelWeight = Number(ninjaLevel) * Number(ninjaLevel);

    return ninjaLevelWeight;
};

const CalcTimeWeight = (time) => {
    // time is garnered from calculate-ninja-points props
    const timeMS =
        Number(time.substring(0, 2) * 60000) + // Minutes to seconds
        Number(time.substring(3, 5) * 1000) + // Seconds to ms
        Number(time.substring(6, 9)); // ms
    return Number(-1 * ((1 / 1800000) * timeMS) + 2.3);
};

const CalcConsistencyWeight = (consistency) => {
    // consistency is garnered from calculate-ninja-points props
    switch (consistency) {
        case "Not_At_All":
            return 0.9;
        case "Not_Very":
            return 1.2;
        case "Moderately":
            return 1.6;
        case "Very":
            return 2;
        case "Extremely":
            return 2.3;
        default:
            return 0;
    }
};

module.exports = CalcNP;
