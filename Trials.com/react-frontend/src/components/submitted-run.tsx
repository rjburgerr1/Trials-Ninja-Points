import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

interface LocationState {
    np: number;
}

const SubmittedRun = (props: any) => {
    const location = useLocation<LocationState>();
    const history = useHistory();

    return (
        <div className="submitted-run-container">
            <p id="complete-submission-dialogue">
                Completed your submission! Feel free to submit more runs by
                clicking the button below.
            </p>

            <Card className="calculated-ninja-points-card">
                <Card.Header id="calculated-ninja-points-header">
                    Ninja Points Rewarded
                </Card.Header>
                <Card.Text id="calculated-ninja-points-text">
                    {location.state.np}
                </Card.Text>
            </Card>
            <button
                id="submit-another-run-button"
                type="button"
                onClick={() => {
                    history.push("/submit-run");
                }}
            >
                Submit another run!
            </button>
        </div>
    );
};

export default SubmittedRun;
