import { Chat } from "../components/chat/chat";
import { Leaderboard } from "../components/leaderboard/leaderboard";
import {
    CreatorsLeaderboardColumns,
    setTableBodyCell,
    setTableHeaderInfoTip,
    creatorsLBEffect,
} from "../components/leaderboard/creators-leaderboard-columns";
import NavBar from "../components/helpers/navbar";

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
