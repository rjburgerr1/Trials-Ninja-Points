export function CalcNP(props: any) {
    const consistencyWeight = CalcConsistencyWeight(props.consistency);
    const timeWeight = CalcTimeWeight(props.time);
    const ninjaLevelWeight = CalcNinjaLevelWeight(props.ninjaLevel);
    const lengthWeight = CalcLengthWeight(props.length);
    const faultWeight = CalcFaultWeight(props.faults);

    const ninjaPoints =
        consistencyWeight *
        timeWeight *
        ninjaLevelWeight *
        lengthWeight *
        faultWeight *
        1.3;

    return ninjaPoints;
}

const CalcFaultWeight = (faults: number) => {
    // faults is garnered from calculate-ninja-points props
    let faultWeight = Math.log(Number(faults) + 10) / Math.log(0.2) + 6;
    return faultWeight;
};

const CalcLengthWeight = (length: string) => {
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

const CalcNinjaLevelWeight = (ninjaLevel: number) => {
    // ninjaLevel is garnered from calculate-ninja-points props
    const ninjaLevelWeight = ninjaLevel * ninjaLevel;
    return ninjaLevelWeight;
};

const CalcTimeWeight = (time: any) => {
    // time is garnered from calculate-ninja-points props
    const timeMS =
        Number(time.substring(0, 2) * 60000) + // Minutes to seconds
        Number(time.substring(3, 5) * 1000) + // Seconds to ms
        Number(time.substring(6, 9)); // ms
    return Number(-1 * ((1 / 1800000) * timeMS) + 2.3);
};

const CalcConsistencyWeight = (consistency: string) => {
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

export default CalcNP;
