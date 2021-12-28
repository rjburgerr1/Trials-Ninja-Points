import axios from "axios";

export const getMainLB = async (date?: Date) => {
    const result = await axios.get("/main-leaderboard", {
        params: { ...(date ? { date: date } : {}) },
    });
    //result returns object with all relevant profile info fields
    return result.data;
};

export async function getRunsLB(
    trackName?: string,
    creator?: string,
    date?: Date
) {
    const result = await axios.get("/runs-leaderboard", {
        params: {
            ...(trackName ? { trackName: trackName } : {}),
            ...(creator ? { creator: creator } : {}),
            ...(date ? { date: date } : {}),
        },
    });
    //result returns object with all relevant run(s) info fields
    return result.data;
}

export async function getTracksLB(date?: Date) {
    const result = await axios.get("/tracks-leaderboard", {
        params: { ...(date ? { date: date } : {}) },
    });
    //result returns object with all relevant track(s) info fields
    return result.data;
}

export async function getCreatorsLB(date?: Date) {
    const result = await axios.get("/creators-leaderboard", {
        params: { ...(date ? { date: date } : {}) },
    });
    //result returns object with all relevant track(s) info fields
    return result.data;
}
