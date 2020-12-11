import React from "react";

export default function LoginComponent() {
  return (
    <div class="form-container sign-up-container">
      <form action="http://localhost:3002/sign-up-complete" method="POST">
        <h1>Create Account</h1>

        <div class="social-container"></div>

        <input type="text" placeholder="Username" name="username" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
