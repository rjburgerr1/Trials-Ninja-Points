import { Chat } from "../components/General-Chat/chat";
import NavBar from "../components/navbar";
import UpdateProfile from "../components/update-profile";

export default function UpdateProfiles(props: any) {
    return (
        <div className="submit-run-container">
            <div className="submit-run-header">
                <NavBar {...props} />
            </div>
            <div className="submit-run-body">
                <div className="submit-run-chat">
                    <Chat />
                </div>
                <div className="submit-run-form">
                    <UpdateProfile />
                </div>

                <div className="submit-run-space-element"></div>
            </div>
        </div>
    );
}
