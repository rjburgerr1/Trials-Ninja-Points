import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
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
		<Card className="container px-0">
			{error && <Alert variant="danger">{error}</Alert>}
			{message && <Alert variant="success">{message}</Alert>}
			<Card.Body className="mx-5">
				<h1 className="text-center my-4">Password Reset</h1>
				<Form onSubmit={handleSubmit} className="px-4">
					<input
						id="email"
						type="email"
						ref={emailRef}
						placeholder="Enter your email..."
						required
						onSubmit={handleSubmit}
						className="my-3"
					/>
					<button disabled={loading} className="w-100" type="submit">
						Reset Password
					</button>
				</Form>
				<div className="w-100 text-center mt-3">
					<Link className="btn-link" to="/signin">
						Sign In
					</Link>
				</div>
			</Card.Body>
			<Card.Footer className="text-center">
				Need an account?{" "}
				<Link className="btn-link" to="/signin">
					Sign Up
				</Link>
			</Card.Footer>
		</Card>
	);
}
