import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import axios from "axios";
import img from "../images/Fusion Title Screen.jpg";
import { getRunsLB } from "../components/leaderboard-requests";
import { TrackInfo } from "../components/track-info";

import { RunsLeaderboard } from "../components/leaderboards/runs-leaderboard";

const resolveData = async (
    trackName: string,
    creator: string,
    setData: any,
    setLoadingData: any
) => {
    try {
        setLoadingData(true);
        const data = await getRunsLB(trackName, creator);

        setData(data);
        setLoadingData(false);
    } catch (error: any) {
        console.error(error.message);
    }
};

const Track: React.FC = (props: any) => {
    const [loadingData, setLoadingData] = useState(true);
    let [data, setData] = useState([{}]);
    const [trackName, setTrackName] = useState(
        props.match.params.name ? props.match.params.name : ""
    );
    const [creator, setCreator] = useState(
        props.match.params.creator ? props.match.params.creator : ""
    );
    const [ninjaLevel, setNinjaLevel] = useState(0);
    const [length, setLength] = useState("");
    const [averageFaults, setAverageFaults] = useState(0);
    const [faultSponginess, setFaultSponginess] = useState("");
    const [rating, setRating] = useState(0);
    const [nRuns, setNRuns] = useState(0);
    const [averageNP, setAverageNP] = useState(0);
    const [trackImage, setTrackImage] = useState();

    useEffect(() => {
        const getTrackInfo = async (trackName: string, creator: string) => {
            try {
                const track: any = await axios.get("/track-info", {
                    params: {
                        trackName: trackName,
                        creator: creator,
                    },
                });
                setTrackName(
                    props.match.params.name ? props.match.params.name : ""
                );
                setCreator(
                    props.match.params.creator ? props.match.params.creator : ""
                );
                setNinjaLevel(track.data.ninja_level);
                setLength(track.data.length);
                setAverageFaults(track.data.average_faults);
                setFaultSponginess(track.data.fault_sponginess);
                setRating(track.data.rating);
                setNRuns(track.data.nRuns);
                setAverageNP(track.data.average_np);
                resolveData(trackName, creator, setData, setLoadingData);
            } catch (error) {
                console.error(error);
            }
        };
        getTrackInfo(trackName, creator);
        setLoadingData(false);
    }, []);

    return (
        <div className="runs-container">
            <div className="track-header">
                <NavBar {...props} />
            </div>
            <div className="track-body">
                {loadingData ? (
                    <p>Loading Please wait...</p>
                ) : (
                    <div className="runs-leaderboard">
                        <RunsLeaderboard runs={data} />
                    </div>
                )}

                <img id="track-thumbnail" src={img} alt="img" />
                <div className="tracks-info">
                    <TrackInfo
                        trackName={trackName}
                        creator={creator}
                        ninjaLevel={ninjaLevel}
                        length={length}
                        averageFaults={averageFaults}
                        faultSponginess={faultSponginess}
                        rating={rating}
                        nRuns={nRuns}
                        averageNP={averageNP}
                    />
                </div>
            </div>
        </div>
    );
};

export default Track;
