import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/signin_signup.css";
import Login from "../components/login.component";
import Signup from "../components/signup.component";
import ForgotPassword from "../components/forgotPassword.component";

export default function signin_signup() {
  const SignUpTransition = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };

  const SignInTransition = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };
  return (
    <div class="signin_signup">
      <div class="container" id="container">
        <Signup />
        <Login />
        <ForgotPassword />
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" id="signIn" onClick={SignInTransition}>
                Sign In
              </button>
            </div>

            <div class="overlay-panel overlay-right">
              <h1>Hi, gamer!</h1>
              <p>
                Enter your personal details and start your ninja journey with us
              </p>
              <button class="ghost" id="signUp" onClick={SignUpTransition}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
