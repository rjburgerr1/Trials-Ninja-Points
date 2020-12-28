import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/auth-context";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SignupComponent = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(event: any) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      if (emailRef.current != null && passwordRef.current != null) {
        await signup(emailRef.current.value, passwordRef.current.value);
      }
      history.push("/");
    } catch {}

    setLoading(false);
  }

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
          type="text"
          placeholder="Username"
          name="username"
          ref={usernameRef}
        />
        <input type="email" placeholder="Email" name="email" ref={emailRef} />
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={passwordRef}
        />
        <button disabled={loading} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupComponent;
