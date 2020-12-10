import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/signin_signup.css";


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

        <div class="form-container sign-up-container">
          <form action="http://localhost:3002/sign-up-complete" method="POST">
            <h1>Create Account</h1>

            <div class="social-container"></div>

            <input type="text" placeholder="Username" name="username"/>
            <input type="email" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div class="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
            
              <div class="social-container"></div>

              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
        
        <div class="overlay-container">
          <div class="overlay">

            <div class="overlay-panel overlay-left">
              <h1>Welcome Back My Ninja!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button class="ghost" id="signIn" onClick={SignInTransition}>Sign In</button>
            </div>

            <div class="overlay-panel overlay-right">
              <h1>Hi, gaymer!</h1>
              <p>Enter your personal details and start your ninja journey with us</p>
              <button class="ghost" id="signUp" onClick={SignUpTransition}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
