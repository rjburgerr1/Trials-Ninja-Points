import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import { useAuth } from "../contexts/auth-context";
import { Card } from "react-bootstrap";
import { formatCreateDate } from "../components/format-dates";

const Profile: React.FC = (props: any) => {
    const { currentUser } = useAuth();
    const [username, setUsername] = useState(
        props.match.params.user ? props.match.params.user : ""
    );
    const [bio, setBio] = useState("");
    const [country, setCountry] = useState("");
    const [runs, setRuns] = useState(0);
    const [highestNPRun, setHighestNPRun] = useState(0);
    const [rank, setRank] = useState(0);
    const [totalNP, setTotalNP] = useState(0);
    const [createDate, setCreateDate] = useState("");
    const [highestLevelPass, setHighestLevelPass] = useState(0);
    const [aliases, setAliases] = useState("");

    useEffect(() => {
        const getProfileInfo = async (user: string, currentUser: any) => {
            try {
                let profile;

                if (user === "") {
                    profile = await axios.get("/profile-info", {
                        params: {
                            id: currentUser.uid,
                        },
                    });
                } else {
                    profile = await axios.get("/profile-info", {
                        params: {
                            username: user,
                        },
                    });
                }
                setAliases(profile.data.aliases);
                setBio(profile.data.bio);
                setCountry(profile.data.country);
                setCreateDate(formatCreateDate(profile.data.create_date));
                setHighestLevelPass(profile.data.highest_level_pass);
                setHighestNPRun(profile.data.highest_np_run);
                setRank(profile.data.rank);
                setRuns(profile.data.runs);
                setTotalNP(profile.data.total_ninja_points);
                setUsername(profile.data.username);
            } catch (error) {
                console.error(error);
            }
        };
        getProfileInfo(username, currentUser);
    }, []);

    return (
        <div className="profile">
            <NavBar {...props} />
            <div className="profile-info">
                <div className="profileicon">
                    <Avatar className="iconavatar">
                        <FontAwesomeIcon
                            icon={faUserNinja}
                            size="2x"
                            color="#fdd643ff"
                        />
                    </Avatar>
                    <p className="ridername">{username}</p>
                </div>

                <Card className="id-card">
                    <Card.Body className="id-card-body">
                        <Card.Title className="profilefieldkey">Bio</Card.Title>
                        <Card.Text className="profilefieldvalue">
                            {bio}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="id-card">
                    <Card.Body className="id-card-body">
                        <Card.Title className="profilefieldkey">
                            Country
                        </Card.Title>
                        <Card.Text className="profilefieldvalue">
                            {country}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="id-card">
                    <Card.Body className="id-card-body">
                        <Card.Title className="profilefieldkey">
                            #Runs
                        </Card.Title>
                        <Card.Text className="profilefieldvalue">
                            {runs}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="id-card">
                    <Card.Body className="id-card-body">
                        <Card.Title className="profilefieldkey">
                            Highest NP Run
                        </Card.Title>
                        <Card.Text className="profilefieldvalue">
                            {highestNPRun}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="id-card">
                    <Card.Body className="id-card-body">
                        <Card.Title className="profilefieldkey">
                            Rank
                        </Card.Title>
                        <Card.Text className="profilefieldvalue">
                            {rank}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="id-card">
                    <Card.Body className="id-card-body">
                        <Card.Title className="profilefieldkey">
                            Total NP
                        </Card.Title>
                        <Card.Text className="profilefieldvalue">
                            {totalNP}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="id-card">
                    <Card.Body className="id-card-body">
                        <Card.Title className="profilefieldkey">
                            Account Created On
                        </Card.Title>
                        <Card.Text className="profilefieldvalue">
                            {createDate}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="id-card">
                    <Card.Body className="id-card-body">
                        <Card.Title className="profilefieldkey">
                            Aliases
                        </Card.Title>
                        <Card.Text className="profilefieldvalue">
                            {aliases}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="id-card">
                    <Card.Body className="id-card-body">
                        <Card.Title className="profilefieldkey">
                            Highest Level Passed
                        </Card.Title>
                        <Card.Text className="profilefieldvalue">
                            {highestLevelPass}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

/* Save these functions for later
const getUsername = async (userID: string) => {
    // Currently only work for retrieving the current users data
    const result = await axios.get("/username", {
        params: {
            uid: userID,
        },
    });
    return result.data.username;
};

const getBio = async (userID: string) => {
    // Currently only work for retrieving the current users data
    const result = await axios.get("/bio", {
        params: {
            uid: userID,
        },
    });
    return result.data.bio;
};

const getCountry = async (userID: string) => {
    // Currently only work for retrieving the current users data
    const result = await axios.get("/country", {
        params: {
            uid: userID,
        },
    });
    return result.data.country;
};
const getRuns = async (userID: string) => {
    // Currently only work for retrieving the current users data
    const result = await axios.get("/number-of-runs", {
        params: {
            uid: userID,
        },
    });
    return result.data.runs;
};

const getHighestRun = async (userID: string) => {
    // Currently only work for retrieving the current users data
    const result = await axios.get("/highest-run", {
        params: {
            uid: userID,
        },
    });
    return result.data.highest_np_run;
};

const getRank = async (userID: string) => {
    // Currently only work for retrieving the current users data
    const result = await axios.get("/rank", {
        params: {
            uid: userID,
        },
    });
    return result.data.rank;
};

const getTotalNP = async (userID: string) => {
    // Currently only work for retrieving the current users data
    const result = await axios.get("/total-np", {
        params: {
            uid: userID,
        },
    });
    return result.data.total_ninja_points;
};

const getCreateDate = async (userID: string) => {
    // Currently only work for retrieving the current users data
    const result = await axios.get("/create-date", {
        params: {
            uid: userID,
        },
    });
    return result.data.create_date;
};

const getHighestLevelPass = async (userID: string) => {
    // Currently only work for retrieving the current users data
    const result = await axios.get("/highest-level-pass", {
        params: {
            uid: userID,
        },
    });
    return result.data.highest_level_pass;
};

const getAliases = async (userID: string) => {
    // Currently only work for retrieving the current users data
    const result = await axios.get("/aliases", {
        params: {
            uid: userID,
        },
    });
    return result.data.aliases;
};
*/

export default Profile;
