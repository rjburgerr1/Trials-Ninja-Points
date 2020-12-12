import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function LoginComponent() {
  const emailRef = useRef();
  const passwordRef = useRef();
  //const usernameRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div class="form-container sign-in-container">
      {error && <Alert variant="danger">{error}</Alert>}
      <form
        //action="http://localhost:3002/sign-up-complete"
        onSubmit={handleSubmit}
        // method="POST"
      >
        <h1>Sign In</h1>

        <div class="social-container"></div>

        <input
          type="text"
          placeholder="Username/Email"
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
      </form>
    </div>
  );
}
