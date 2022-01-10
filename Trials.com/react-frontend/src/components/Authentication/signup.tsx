import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import signupPrisma from "./prisma-signup";

const SignupComponent = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);

    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            setError("");
            setLoading(true);

            if (
                emailRef.current != null &&
                usernameRef.current != null &&
                passwordRef.current != null
            ) {
                const response = await signup(
                    emailRef.current.value,
                    passwordRef.current.value,
                    usernameRef.current.value
                );
                signupPrisma(
                    emailRef.current.value,
                    usernameRef.current.value,
                    response.user.uid
                );
            }

            navigate("/");
        } catch (error: any) {
            console.log(error);
            setError(error.message);
        }

        setLoading(false);
    };

    return (
        <div className="form-container sign-up-container">
            {error && <Alert variant="danger">{error}</Alert>}

            <form onSubmit={handleSubmit}>
                <h1 id="create-account-header">Create Account</h1>

                <div className="social-container"></div>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    ref={usernameRef}
                    autoComplete="false"
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    ref={emailRef}
                    autoComplete="false"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    ref={passwordRef}
                    autoComplete="new-password"
                />

                <button disabled={loading} type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupComponent;
