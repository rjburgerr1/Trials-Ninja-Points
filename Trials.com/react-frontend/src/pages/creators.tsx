import { Chat } from "../components/general-chat/chat";
import { Leaderboard } from "../components/leaderboards/leaderboard";
import {
    CreatorsLeaderboardColumns,
    setTableBodyCell,
    setTableHeaderInfoTip,
    creatorsLBEffect,
} from "../components/leaderboards/creators-leaderboard-columns";
import NavBar from "../components/helper-components/navbar";

export default function Creators(props: any) {
    return (
        <div className="creators-container">
            <div className="creators-header">
                <NavBar {...props} />
            </div>
            <div className="creators-body">
                <div className="creators-chat">
                    <Chat />
                </div>
                <div className="creators-leaderboard">
                    <Leaderboard
                        columns={CreatorsLeaderboardColumns}
                        effect={creatorsLBEffect}
                        sortBy="average_track_ninja_points"
                        setTableBodyCell={setTableBodyCell}
                        setTableHeaderInfoTip={setTableHeaderInfoTip}
                    />
                </div>

                <div className="creators-space-element"></div>
            </div>
        </div>
    );
}
