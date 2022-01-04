import { Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const SubmittedRun = () => {
    const navigate = useNavigate();

    // Ideally I would set this type to {state: { ninjaPoints: number/string}} but the useLocation hook
    // strictly disallows all other types besides unknown for the Location type
    const { state }: any = useLocation();

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
                    {state.ninjaPoints}
                </Card.Text>
            </Card>
            <button
                id="submit-another-run-button"
                type="button"
                onClick={() => {
                    navigate("/submit-run");
                }}
            >
                Submit another run!
            </button>
        </div>
    );
};

export default SubmittedRun;
