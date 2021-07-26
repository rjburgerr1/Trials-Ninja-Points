import { Chat } from "../components/General-Chat/chat";
import { TracksLeaderboard } from "../components/leaderboards/tracks-leaderboard";
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
                    <TracksLeaderboard />
                </div>

                <div className="tracks-space-element"></div>
            </div>
        </div>
    );
}
