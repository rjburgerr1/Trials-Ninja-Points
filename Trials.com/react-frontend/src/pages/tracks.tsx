import { Chat } from "../components/General-Chat/chat";
import { Leaderboard } from "../components/leaderboards/leaderboard";
import {
    TracksLeaderboardColumns,
    setTableBodyCell,
    setTableHeaderInfoTip,
    tracksLBEffect,
} from "../components/leaderboards/tracks-leaderboard-columns";
import NavBar from "../components/navbar";

export default function Tracks(props: any) {
    return (
        <div className="tracks-container">
            <div className="tracks-header">
                <NavBar {...props} />
            </div>
            <div className="tracks-body">
                <div className="tracks-chat">
                    <Chat />
                </div>
                <div className="tracks-leaderboard">
                    <Leaderboard
                        columns={TracksLeaderboardColumns}
                        effect={tracksLBEffect}
                        sortBy="total_ninja_points"
                        setTableBodyCell={setTableBodyCell}
                        setTableHeaderInfoTip={setTableHeaderInfoTip}
                    />
                </div>

                <div className="tracks-space-element"></div>
            </div>
        </div>
    );
}
