import React from "react";

export default function LoginComponent() {
  return (
    <div class="form-container sign-in-container">
      <form action="http://localhost:3002/users" method="POST">
        <h1>Sign in</h1>

        <div class="social-container"></div>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="\#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}
