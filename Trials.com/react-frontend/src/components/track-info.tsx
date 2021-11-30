import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export const TrackInfo = (props: any) => {
    return (
        <div className="track-info">
            <Card id="kitchen-sink-card" style={{ width: "18rem" }}>
                <Card.Body id="kitchen-sink-header">
                    <Card.Title id="track-name">{props.trackName}</Card.Title>
                    <Card.Text id="track-creator">
                        <span>by</span> {props.creator}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-groups">
                    <ListGroupItem className="kitchen-sink-group-item">
                        <span className="track-kitchen-sink-label">
                            Ninja Level
                        </span>
                        <span className="track-kitchen-sink-value">
                            {props.ninjaLevel}
                        </span>
                    </ListGroupItem>
                    <ListGroupItem className="kitchen-sink-group-item">
                        <span className="track-kitchen-sink-label">Length</span>
                        <span className="track-kitchen-sink-value">
                            {props.length}
                        </span>
                    </ListGroupItem>
                    <ListGroupItem className="kitchen-sink-group-item">
                        <span className="track-kitchen-sink-label">
                            Average Faults
                        </span>
                        <span className="track-kitchen-sink-value">
                            {props.averageFaults}
                        </span>
                    </ListGroupItem>
                    <ListGroupItem className="kitchen-sink-group-item">
                        <span className="track-kitchen-sink-label">
                            Fault Sponginess
                        </span>
                        <span className="track-kitchen-sink-value">
                            {props.faultSponginess}
                        </span>
                    </ListGroupItem>
                    <ListGroupItem className="kitchen-sink-group-item">
                        <span className="track-kitchen-sink-label">rating</span>
                        <span className="track-kitchen-sink-value">
                            {props.rating}
                        </span>
                    </ListGroupItem>
                    <ListGroupItem className="kitchen-sink-group-item">
                        <span className="track-kitchen-sink-label">
                            # of runs
                        </span>
                        <span className="track-kitchen-sink-value">
                            {props.nRuns}
                        </span>
                    </ListGroupItem>
                    <ListGroupItem className="kitchen-sink-group-item">
                        <span className="track-kitchen-sink-label">
                            Average Ninja Points
                        </span>
                        <span className="track-kitchen-sink-value">
                            {props.averageNP}
                        </span>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
};
