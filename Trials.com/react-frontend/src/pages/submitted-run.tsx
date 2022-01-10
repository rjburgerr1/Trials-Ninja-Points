import { Chat } from "../components/general-chat/chat";
import NavBar from "../components/helper-components/navbar";
import SubmittedRun from "../components/submitted-run";

export default function SubmittedRuns(props: any) {
    return (
        <div className="submitted-run-page-container">
            <div className="submitted-run-header">
                <NavBar {...props} />
            </div>
            <div className="submitted-run-body">
                <div className="submitted-run-chat">
                    <Chat />
                </div>
                <div className="submitted-run-content">
                    <SubmittedRun />
                </div>

                <div className="submitted-run-space-element"></div>
            </div>
        </div>
    );
}
