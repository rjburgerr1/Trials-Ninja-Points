import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const SimpleModal = (props: any) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleAction}>
                    {props.footer}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
