import { useRef, useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export default function LoginComponent() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(event: any) {
        event.preventDefault();

        try {
            setError("");
            setLoading(true);
            if (emailRef.current != null && passwordRef.current != null) {
                await login(emailRef.current.value, passwordRef.current.value);
            }
            history.push("/");
        } catch {
            setError("Failed to log in");
        }

        setLoading(false);
    }

    return (
        <div className="form-container sign-in-container">
            {error && <Alert variant="danger">{error}</Alert>}
            <form
                //action="http://localhost:3002/sign-up-complete"
                onSubmit={handleSubmit}
                // method="POST"
            >
                <h1>Sign In</h1>

                <div className="social-container"></div>
                <input
                    type="text"
                    placeholder="Email"
                    name="Email"
                    ref={emailRef}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    ref={passwordRef}
                />
                <button disabled={loading} type="submit">
                    Sign In
                </button>
                <Link to="/forgot-password" className="my-0">
                    <p role="button" className="btn-link my-1 small">
                        Forgot Password?
                    </p>
                </Link>
            </form>
        </div>
    );
}
