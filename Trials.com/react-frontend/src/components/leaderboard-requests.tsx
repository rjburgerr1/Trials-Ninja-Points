import axios from "axios";

export default async function getMainLB() {
    const result = await axios.get("/main-leaderboard", {});
    //result returns object with all relevant profile info fields
    return result.data;
}

export async function getRunsLB(trackName?: string, creator?: string) {
    const result = await axios.get("/runs-leaderboard", {
        params: { trackName: trackName, creator: creator },
    });
    //result returns object with all relevant run(s) info fields
    return result.data;
}

export async function getTracksLB() {
    const result = await axios.get("/tracks-leaderboard", {});
    //result returns object with all relevant track(s) info fields
    return result.data;
}
