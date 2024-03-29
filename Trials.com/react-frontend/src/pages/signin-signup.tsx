import React from "react";
import Login from "../components/auth/login";
import Signup from "../components/auth/signup";
import { CAPTCHA } from "../components/helpers/captcha";

interface SigninSignupProps {
    container: HTMLElement | null;
}

const SigninSignup: React.FC<SigninSignupProps> = () => {
    const SignUpTransition = () => {
        const container = document.getElementById("container");
        if (container != null) container.classList.add("right-panel-active");
    };

    const SignInTransition = () => {
        const container = document.getElementById("container");
        if (container != null) container.classList.remove("right-panel-active");
    };
    return (
        //  it'd be nice if we could end up changing this outside div to Card to be consistent, but it breaks right now
        //  if not, thats fine, since this is a special case we will probably only use once
        <div className="signin-signup-outer">
            <CAPTCHA />
            <div className="container signin-signup" id="container">
                <Signup />
                <Login />
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome back!</h1>
                            <p>
                                To keep connected with us please login with your
                                personal info
                            </p>
                            <button
                                className="ghost"
                                id="signIn"
                                onClick={SignInTransition}
                            >
                                Sign In
                            </button>
                        </div>

                        <div className="overlay-panel overlay-right">
                            <h1>Hi, Rider!</h1>
                            <p>
                                Enter your personal details and start your ninja
                                journey with us
                            </p>
                            <button
                                className="ghost"
                                id="signUp"
                                onClick={SignUpTransition}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigninSignup;
