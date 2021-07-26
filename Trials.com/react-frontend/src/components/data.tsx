import axios from "axios";

export default async function getMainLB() {
    // Currently only work for retrieving the current users data
    const result = await axios.get("/main-leaderboard", {});
    //result returns object with all relevant profile info fields
    return result.data;
}

export async function getRunsLB() {
    // Currently only work for retrieving the current users data
    const result = await axios.get("/runs-leaderboard", {});
    //result returns object with all relevant profile info fields
    return result.data;
}

export async function getTracksLB() {
    // Currently only work for retrieving the current users data
    const result = await axios.get("/tracks-leaderboard", {});
    //result returns object with all relevant profile info fields
    return result.data;
}
