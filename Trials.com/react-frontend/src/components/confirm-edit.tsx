import { useLocation, useNavigate } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAuth } from "../contexts/auth-context";
import axios from "axios";

interface LocationState {
    rider: string;
    trackName: string;
    creator: string;
    time: string;
    faults: string;
    ninjaLevel: string;
    consistency: string;
    video: string;
    rating: string;
    rank: string;
    length: string;
    state: any;
}

// For future devs, runs.state is the old run and runs.anyfield are the new runs

export const ConfirmEdit = () => {
    const location = useLocation();
    const runs = location.state as LocationState; // Type Casting, then you can get the params passed via router
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const id = currentUser.uid;

    const handleClick = async () => {
        await axios.post("/edit-run", {
            ...runs,
            id,
        });

        // Calculate Ninja Points for run (+update run/tracks row with np value)
        const response = await axios.post("/calculate-ninja-points", {
            ...runs,
            id,
        });

        // Show page with end result
        navigate("/submitted-run", {
            state: { ninjaPoints: response.data.ninjaPoints },
        });
    };

    const [trackNameStale, trackNameEdit] =
        runs.trackName === runs.state.track ? ["", ""] : ["stale", "edit"];
    const [creatorStale, creatorEdit] =
        runs.creator === runs.state.creator ? ["", ""] : ["stale", "edit"];
    const [ninjaLevelStale, ninjaLevelEdit] =
        runs.ninjaLevel === runs.state.ninjaLevel
            ? ["", ""]
            : ["stale", "edit"];

    const [lengthStale, lengthEdit] =
        runs.length === runs.state.length ? ["", ""] : ["stale", "edit"];

    const [consistencyStale, consistencyEdit] =
        runs.consistency === runs.state.consistency
            ? ["", ""]
            : ["stale", "edit"];

    const [ratingStale, ratingEdit] =
        runs.rating === runs.state.rating ? ["", ""] : ["stale", "edit"];

    const [faultsStale, faultsEdit] =
        runs.faults === runs.state.faults ? ["", ""] : ["stale", "edit"];

    const [timeStale, timeEdit] =
        runs.time === runs.state.time ? ["", ""] : ["stale", "edit"];

    const [videoStale, videoEdit] =
        runs.video === runs.state.video ? ["", ""] : ["stale", "edit"];

    return (
        <div className="runs-cards">
            <div className="card-container">
                <Card id="kitchen-sink-card">
                    <Card.Body id="kitchen-sink-header">
                        <Card.Title id="track-name">
                            <b className={trackNameStale}>{runs.state.track}</b>
                        </Card.Title>
                        <Card.Text id="track-creator">
                            by{" "}
                            <span className={creatorStale}>
                                {runs.state.creator}
                            </span>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-groups">
                        <ListGroupItem className="kitchen-sink-group-item">
                            <span className="kitchen-sink-label">
                                Ninja Level
                            </span>
                            <span className="kitchen-sink-value">
                                <b className={ninjaLevelStale}>
                                    {runs.state.ninjaLevel}
                                </b>
                            </span>
                        </ListGroupItem>
                        <ListGroupItem className="kitchen-sink-group-item">
                            <span className="kitchen-sink-label">Length</span>
                            <span className="kitchen-sink-value">
                                <b className={lengthStale}>
                                    {runs.state.length}
                                </b>
                            </span>
                        </ListGroupItem>

                        <ListGroupItem className="kitchen-sink-group-item">
                            <span className="kitchen-sink-label">
                                Consistency
                            </span>
                            <span className="kitchen-sink-value">
                                <b className={consistencyStale}>
                                    {runs.state.consistency}
                                </b>
                            </span>
                        </ListGroupItem>

                        <ListGroupItem className="kitchen-sink-group-item">
                            <span className="kitchen-sink-label">Faults</span>
                            <span className="kitchen-sink-value">
                                <b className={faultsStale}>
                                    {" "}
                                    {runs.state.faults}
                                </b>
                            </span>
                        </ListGroupItem>
                        <ListGroupItem className="kitchen-sink-group-item">
                            <span className="kitchen-sink-label">Time</span>
                            <span className="kitchen-sink-value">
                                <b className={timeStale}> {runs.state.time}</b>
                            </span>
                        </ListGroupItem>
                        <ListGroupItem className="kitchen-sink-group-item">
                            <span className="kitchen-sink-label">Rating</span>
                            <span className="kitchen-sink-value">
                                <b className={ratingStale}>
                                    {" "}
                                    {runs.state.rating}
                                </b>
                            </span>
                        </ListGroupItem>
                        <ListGroupItem className="kitchen-sink-group-item">
                            <span className="kitchen-sink-label">Video</span>
                            <span className="kitchen-sink-value" id="video-url">
                                <b className={videoStale}>
                                    {" "}
                                    {runs.state.video}
                                </b>
                            </span>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                <p id="old-run">OLD RUN</p>
            </div>

            <button id="confirm-edit-run" onClick={handleClick}>
                CONFIRM
            </button>

            <div className="card-container">
                <Card id="kitchen-sink-card">
                    <Card.Body id="kitchen-sink-header">
                        <Card.Title id="track-name">
                            {" "}
                            <b className={trackNameEdit}>{runs.trackName}</b>
                        </Card.Title>
                        <Card.Text id="track-creator">
                            by{" "}
                            <span className={creatorEdit}>{runs.creator}</span>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-groups">
                        <ListGroupItem className="kitchen-sink-group-item">
                            <span className="kitchen-sink-value">
                                <b className={ninjaLevelEdit}>
                                    {runs.ninjaLevel}
                                </b>
                            </span>
                            <span className="kitchen-sink-label">
                                Ninja Level
                            </span>
                        </ListGroupItem>
                        <ListGroupItem className="kitchen-sink-group-item">
                            <span className="kitchen-sink-value">
                                <b className={lengthEdit}>{runs.length}</b>
                            </span>
                            <span className="kitchen-sink-label">Length</span>
                        </ListGroupItem>

                        <ListGroupItem className="kitchen-sink-group-item">
                            <span className="kitchen-sink-value">
                                <b className={consistencyEdit}>
                                    {runs.consistency}
                                </b>
                            </span>{" "}
                            <span className="kitchen-sink-label">
                                Consistency
                            </span>
                        </ListGroupItem>

                        <ListGroupItem className="kitchen-sink-group-item">
                            <span className="kitchen-sink-value">
                                <b className={faultsEdit}>{runs.faults}</b>
                            </span>{" "}
                            <span className="kitchen-sink-label">Faults</span>
                        </ListGroupItem>
                        <ListGroupItem className="kitchen-sink-group-item">
                            <span className="kitchen-sink-value">
                                <b className={timeEdit}>{runs.time}</b>
                            </span>{" "}
                            <span className="kitchen-sink-label">Time</span>
                        </ListGroupItem>
                        <ListGroupItem className="kitchen-sink-group-item">
                            <span className="kitchen-sink-value">
                                <b className={ratingEdit}>{runs.rating}</b>
                            </span>
                            <span className="kitchen-sink-label">Rating</span>
                        </ListGroupItem>
                        <ListGroupItem className="kitchen-sink-group-item">
                            <span className="kitchen-sink-value" id="video-url">
                                <b className={videoEdit}>{runs.video}</b>
                            </span>{" "}
                            <span className="kitchen-sink-label">Video</span>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                <p id="new-run">NEW RUN</p>
            </div>
        </div>
    );
};
