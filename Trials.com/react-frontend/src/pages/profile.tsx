import NavBar from "../components/helpers/navbar";
import { Profile } from "../components/profile/profile";

export default function Profiles(props: any) {
    return (
        <div className="page-container">
            <div className="page-header">
                <NavBar {...props} />
            </div>
            <div className="page-body">
                <Profile />
            </div>
        </div>
    );
}
