import { Card, ListGroup } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { SimpleModal } from "./helpers/simple-modal";
import { Leaderboard } from "./leaderboard/leaderboard";
import {
    runsLBEffect,
    RunsLeaderboardColumns,
    setRunsTableBodyCell,
    setRunsTableHeaderInfoTip,
} from "./leaderboard/runs-leaderboard-columns";
import axios from "axios";
import { useAuth } from "../contexts/auth-context";

interface LocationState {
    rider: string;
    track: string;
    creator: string;
    time: string;
    faults: string;
    ninjaLevel: string;
    consistency: string;
    video: string;
    rating: string;
    rank: string;
    length: string;
    row: any;
}

export const DeleteRun = () => {
    const { currentUser } = useAuth();
    const id = currentUser.uid;
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as LocationState; // Type Casting, then you can get the params passed via router

    const handleClose = () => {
        // Show page with end result
        navigate("/runs");
    };

    const handleAction = async () => {
        await axios.post("/delete-run", {
            ...state,
            id,
        });

        navigate("/runs");
    };

    const test = () => {
        return (
            <div id="delete-run-container">
                <Card id="delete-run-card" style={{ width: "18rem" }}>
                    <Card.Header>
                        {state.track} by {state.creator}
                    </Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Faults - {state.faults}</ListGroup.Item>
                        <ListGroup.Item>Time - {state.time}</ListGroup.Item>
                        <ListGroup.Item>
                            Ninja Level - {state.ninjaLevel}
                        </ListGroup.Item>
                        <ListGroup.Item>Length - {state.length}</ListGroup.Item>
                        <ListGroup.Item>
                            Consistency - {state.consistency}
                        </ListGroup.Item>
                        <ListGroup.Item>Rating - {state.rating}</ListGroup.Item>
                        <ListGroup.Item>Video - {state.video}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        );
    };

    return (
        <div>
            <Leaderboard
                columns={RunsLeaderboardColumns}
                effect={runsLBEffect}
                sortBy="ninja_points"
                setTableBodyCell={setRunsTableBodyCell}
                setTableHeaderInfoTip={setRunsTableHeaderInfoTip}
            />
            <SimpleModal
                show={true}
                heading="Are you sure you want to delete this run?"
                body={test()}
                footer="Delete"
                handleClose={handleClose}
                handleAction={handleAction}
            />
        </div>
    );
};
