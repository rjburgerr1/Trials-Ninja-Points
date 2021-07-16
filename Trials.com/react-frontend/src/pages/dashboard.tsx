import { Chat } from "../components/General-Chat/chat";
import { MainLeaderboard } from "../components/leaderboards/main-leaderboard";
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
                    <MainLeaderboard />
                </div>

                <div className="dashboard-space-element"></div>
            </div>
        </div>
    );
}
