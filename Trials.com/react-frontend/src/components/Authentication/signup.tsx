import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import signupPrisma from "./prisma-signup";

const SignupComponent = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);

    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

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

            history.push("/");
        } catch (error: any) {
            console.log(error);
            setError(error.message);
        }

        setLoading(false);
    };

    return (
        <div className="form-container sign-up-container">
            {error && <Alert variant="danger">{error}</Alert>}

            <form
                //action="http://localhost:3002/sign-up-complete"
                onSubmit={handleSubmit}
                // method="POST"
            >
                <h1>Create Account</h1>

                <div className="social-container"></div>

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    ref={emailRef}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    ref={passwordRef}
                />
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    ref={usernameRef}
                />
                <button disabled={loading} type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupComponent;
