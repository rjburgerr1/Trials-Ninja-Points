import React, { useRef, useState } from "react";
import { Form, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/auth-context";
import { Link } from "react-router-dom";

export default function ResetPassword() {
    const emailRef = useRef<HTMLInputElement>(null);
    const { resetPassword } = useAuth();
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: any) {
        event.preventDefault();

        try {
            setMessage("");
            setError("");
            setLoading(true);
            if (emailRef.current != null) {
                await resetPassword(emailRef.current.value);
            }
            setMessage("Check your inbox for further instructions.");
        } catch {
            setError("Failed to reset password. Verify entered email.");
        }

        setLoading(false);
    }

    return (
        <div id="forgot-password-page">
            <Form
                onSubmit={handleSubmit}
                className="form-container"
                id="reset-password-form-container"
            >
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <h1 className="form-label" id="password-reset-header">
                    Password Reset
                </h1>
                <input
                    id="email"
                    type="email"
                    ref={emailRef}
                    placeholder="Enter your email..."
                    required
                    onSubmit={handleSubmit}
                    className="my-3"
                />
                <button
                    disabled={loading}
                    className="form-button"
                    id="reset-password-button"
                    type="submit"
                >
                    Reset Password
                </button>
                <div
                    className="form-footer-links"
                    id="reset-password-form-footer-links"
                >
                    <Link className="form-link" to="/signin">
                        Sign In
                    </Link>
                </div>
            </Form>
        </div>
    );
}
