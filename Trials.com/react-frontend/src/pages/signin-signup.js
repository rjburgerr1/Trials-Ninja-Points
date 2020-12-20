import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/signin-signup.scss";
import Login from "../components/login";
import Signup from "../components/signup";
import { Card } from "react-bootstrap";

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
      //  it'd be nice if we could end up changing this outside div to Card to be consistent, but it breaks right now
      //  if not, thats fine, since this is a special case we will probably only use once
      <div class="container signin-signup" id="container">
        <Signup />
        <Login />
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
  );
}
