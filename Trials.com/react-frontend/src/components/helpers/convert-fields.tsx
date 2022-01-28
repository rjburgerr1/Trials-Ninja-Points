export const convertLength = (length: number) => {
    if (length <= 1.5) {
        return "Short";
    } else if (length > 1.5 && length <= 2.5) {
        return "Medium";
    } else {
        return "Long";
    }
};

export const convertConsistency = (consistency: number) => {
    if (consistency <= 1.5) {
        return "Not At All";
    } else if (consistency > 1.5 && consistency <= 2.5) {
        return "Not Very";
    } else if (consistency > 2.5 && consistency <= 3.5) {
        return "Moderately";
    } else if (consistency > 3.5 && consistency <= 4.5) {
        return "Very";
    } else {
        return "Extremely";
    }
};
