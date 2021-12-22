import { Chat } from "../components/General-Chat/chat";
import { Leaderboard } from "../components/leaderboards/leaderboard";
import {
    MainLeaderboardColumns,
    setTableBodyCell,
    setTableHeaderInfoTip,
    mainLBEffect,
} from "../components/leaderboards/main-leaderboard-columns";
import NavBar from "../components/navbar";

export default function Dashboard(props: any) {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <NavBar {...props} />
            </div>
            <div className="dashboard-body">
                <div className="dashboard-chat">
                    <Chat />
                </div>
                <div className="dashboard-leaderboard">
                    <Leaderboard
                        columns={MainLeaderboardColumns}
                        sortBy="total_ninja_points"
                        setTableBodyCell={setTableBodyCell}
                        setTableHeaderInfoTip={setTableHeaderInfoTip}
                        effect={mainLBEffect}
                    />
                </div>

                <div className="dashboard-space-element"></div>
            </div>
        </div>
    );
}
