import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleEmailChange = (event) => {
    event.preventDefault();
    this.setState({ email: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleLogin = () => {
    console.log("Email: " + this.state.email);
    console.log("Password: " + this.state.password);
  };
  render() {
    return (
      <form action="http://localhost:3002/users" method="post">
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            value={this.state.email}
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            onChange={this.handleEmailChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            value={this.state.password}
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            onChange={this.handlePasswordChange}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={this.handleLogin}
        >
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
  }
}
