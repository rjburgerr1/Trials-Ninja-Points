import { Chat } from "../components/General-Chat/chat";
import { RunsLeaderboard } from "../components/leaderboards/runs-leaderboard";
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
                    <RunsLeaderboard />
                </div>

                <div className="runs-space-element"></div>
            </div>
        </div>
    );
}
