import { Chat } from "../components/chat/chat";
import NavBar from "../components/helpers/navbar";
import SubmitRun from "../components/submit-run";

export default function SubmitRuns(props: any) {
    return (
        <div className="submit-run-container">
            <div className="submit-run-header">
                <NavBar {...props} />
            </div>
            <div className="submit-run-body">
                <div className="submit-run-chat"></div>
                <div className="submit-run-form">
                    <SubmitRun />
                </div>

                <div className="submit-run-help-element">{props.help}</div>
            </div>
        </div>
    );
}
