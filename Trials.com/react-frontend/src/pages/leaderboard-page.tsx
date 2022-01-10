import { Chat } from "../components/General-Chat/chat";
import { Leaderboard } from "../components/leaderboards/leaderboard";

import NavBar from "../components/Helper-components/navbar";

export default function LeaderboardPage(props: any) {
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
                        columns={props.columns}
                        effect={props.effect}
                        sortBy={props.sortBy}
                        setTableBodyCell={props.setTableBodyCell}
                        setTableHeaderInfoTip={props.setTableHeaderInfoTip}
                    />
                </div>

                <div className="tracks-space-element"></div>
            </div>
        </div>
    );
}
