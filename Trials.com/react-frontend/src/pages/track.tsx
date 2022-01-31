import React, { useEffect, useState } from "react";
import { getRunsLB } from "../components/leaderboard/leaderboard-requests";
import { TrackInfo } from "../components/track-info";
import { Leaderboard } from "../components/leaderboard/leaderboard";
import Loading from "../components/helpers/loading";
import {
    trackLBEffect,
    TrackLeaderboardColumns,
    setTrackTableBodyCell,
    setTrackTableHeaderInfoTip,
} from "../components/leaderboard/track-leaderboard-columns";
import axios from "axios";
import img from "../images/Fusion Title Screen.jpg"; // This will be replaced with the tracks image later on
import NavBar from "../components/helpers/navbar";
import { useLocation } from "react-router-dom";

interface LocationState {
    track: string;
    creatorName: string;
}

const Track: React.FC = (props: any) => {
    const location = useLocation();

    const state = location.state as LocationState; // Type Casting, then you can get the params passed via router
    const { track, creatorName } = state;

    let [data, setData] = useState(null);
    const [date, setDate] = useState(new Date());
    const [trackName, setTrackName] = useState(track ? track : "");
    const [creator, setCreator] = useState(creatorName ? creatorName : "");
    const [ninjaLevel, setNinjaLevel] = useState(0);
    const [length, setLength] = useState("N/A");
    const [averageFaults, setAverageFaults] = useState(0);
    const [consistency, setConsistency] = useState("N/A");
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

                setNinjaLevel(track.data.ninja_level);
                setLength(track.data.length);
                setAverageFaults(track.data.average_faults);
                setConsistency(track.data.consistency);
                setRating(track.data.rating);
                setNRuns(track.data.nRuns);
                setAverageNP(track.data.average_np);

                setData(await getRunsLB(trackName, creator, date));
            } catch (error) {
                console.error(error);
            }
        };
        getTrackInfo(trackName, creator);
    }, []);

    return data ? (
        <div className="runs-container">
            <div className="track-header">
                <NavBar {...props} />
            </div>
            <div className="track-body">
                <div className="track-specific-leaderboard">
                    <Leaderboard
                        columns={TrackLeaderboardColumns}
                        effect={trackLBEffect}
                        sortBy="ninja_points"
                        setTableBodyCell={setTrackTableBodyCell}
                        setTableHeaderInfoTip={setTrackTableHeaderInfoTip}
                        runs={data}
                    />
                </div>
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
    ) : (
        <Loading type="spokes" color="green" />
    );
};

export default Track;
