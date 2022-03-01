export const convertLength = (length: number) => {
    if (length <= 1.1) {
        return "Short";
    } else if (length > 1.1 && length <= 1.4) {
        return "Medium";
    } else {
        return "Long";
    }
};

export const convertConsistency = (consistency: number) => {
    if (consistency <= 0.9) {
        return "Extremely";
    } else if (consistency > 0.9 && consistency <= 1.2) {
        return "Very";
    } else if (consistency > 1.2 && consistency <= 1.6) {
        return "Moderately";
    } else if (consistency > 1.6 && consistency <= 2) {
        return "Not Very";
    } else {
        return "Not At All";
    }
};
