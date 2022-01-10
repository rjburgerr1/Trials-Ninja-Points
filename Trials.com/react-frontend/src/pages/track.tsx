import React, { useEffect, useState } from "react";
import { getRunsLB } from "../components/Leaderboards/leaderboard-requests";
import { TrackInfo } from "../components/track-info";
import { Leaderboard } from "../components/Leaderboards/leaderboard";
import {
    runsLBEffect,
    RunsLeaderboardColumns,
    setRunsTableBodyCell,
    setRunsTableHeaderInfoTip,
} from "../components/Leaderboards/runs-leaderboard-columns";
import axios from "axios";
import img from "../images/Fusion Title Screen.jpg"; // This will be replaced with the tracks image later on
import NavBar from "../components/Helper-components/navbar";
import { useLocation } from "react-router-dom";

interface LocationState {
    track: string;
    creatorName: string;
}

const resolveData = async (
    trackName: string,
    creator: string,
    setData: any,
    setLoadingData: any,
    date: Date
) => {
    try {
        setLoadingData(true);
        const data = await getRunsLB(trackName, creator, date);

        setData(data);
        setLoadingData(false);
    } catch (error: any) {
        console.error(error.message);
    }
};

const Track: React.FC = (props: any) => {
    const [loadingData, setLoadingData] = useState(true);
    const location = useLocation();
    const state = location.state as LocationState; // Type Casting, then you can get the params passed via router
    const { track, creatorName } = state;
    let [data, setData] = useState([{}]);
    const [date, setDate] = useState(new Date());
    const [trackName, setTrackName] = useState(track ? track : "");
    const [creator, setCreator] = useState(creatorName ? creatorName : "");
    const [ninjaLevel, setNinjaLevel] = useState(0);
    const [length, setLength] = useState("");
    const [averageFaults, setAverageFaults] = useState(0);
    const [consistency, setConsistency] = useState("");
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
                setConsistency(track.data.consistency);
                setRating(track.data.rating);
                setNRuns(track.data.nRuns);
                setAverageNP(track.data.average_np);
                resolveData(trackName, creator, setData, setLoadingData, date);
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
                        <Leaderboard
                            columns={RunsLeaderboardColumns}
                            effect={runsLBEffect}
                            sortBy="total_ninja_points"
                            setTableBodyCell={setRunsTableBodyCell}
                            setTableHeaderInfoTip={setRunsTableHeaderInfoTip}
                            runs={data}
                        />
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
                        consistency={consistency}
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
