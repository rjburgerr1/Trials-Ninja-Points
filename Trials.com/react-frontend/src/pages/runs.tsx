import { Chat } from "../components/General-Chat/chat";
import { Leaderboard } from "../components/leaderboards/leaderboard";
import {
    runsLBEffect,
    RunsLeaderboardColumns,
    setTableBodyCell,
    setTableHeaderInfoTip,
} from "../components/leaderboards/runs-leaderboard-columns";
import NavBar from "../components/navbar";

export default function Runs(props: any) {
    return (
        <div className="runs-container">
            <div className="runs-header">
                <NavBar {...props} />
            </div>
            <div className="runs-body">
                <div className="runs-chat">
                    <Chat />
                </div>
                <div className="runs-leaderboard">
                    <Leaderboard
                        columns={RunsLeaderboardColumns}
                        effect={runsLBEffect}
                        sortBy="ninja_points"
                        setTableBodyCell={setTableBodyCell}
                        setTableHeaderInfoTip={setTableHeaderInfoTip}
                    />
                </div>

                <div className="runs-space-element"></div>
            </div>
        </div>
    );
}
