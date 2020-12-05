import React, { Component } from "react";

export default class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamertag: "",
      rank: "",
      faults: "",
      time: "",
      trackname: "",
      ninjapoints: "",
    };
  }

  handlegamertagChange = (event) => {
    this.setState({ gamertag: event.target.value });
  };

  handleRankChange = (event) => {
    this.setState({ rank: event.target.value });
  };

  handleFaultsChange = (event) => {
    this.setState({ faults: event.target.value });
  };

  handleTimeChange = (event) => {
    this.setState({ time: event.target.value });
  };

  handleTrackChange = (event) => {
    this.setState({ trackname: event.target.value });
  };

  handleninjapointsChange = (event) => {
    this.setState({ ninjapoints: event.target.value });
  };

  handleSubmit = () => {
    // Put useful log data here probably
  };

  render() {
    return (
      <form action="http://localhost:3002/submit-run" method="post">
        <h3>Submit Your Run</h3>

        <div className="form-group">
          <label>gamertag</label>
          <input
            value={this.state.gamertag}
            type="text"
            className="form-control"
            placeholder="Enter gamertag"
            name="gamertag"
            onChange={this.handlegamertagChange}
          />
        </div>

        <div className="form-group">
          <label>Rank</label>
          <input
            value={this.state.rank}
            type="text"
            className="form-control"
            placeholder="Enter rank"
            name="rank"
            onChange={this.handleRankChange}
          />
        </div>

        <div className="form-group">
          <label>Faults</label>
          <input
            value={this.state.faults}
            type="text"
            className="form-control"
            placeholder="Enter faults"
            name="faults"
            onChange={this.handleFaultsChange}
          />
        </div>

        <div className="form-group">
          <label>Time</label>
          <input
            value={this.state.time}
            type="text"
            className="form-control"
            placeholder="Enter time"
            name="time"
            onChange={this.handleTimeChange}
          />
        </div>

        <div className="form-group">
          <label>Track Name</label>
          <input
            value={this.state.trackname}
            type="text"
            className="form-control"
            placeholder="Enter track name"
            name="track-name"
            onChange={this.handleTrackChange}
          />
        </div>

        <div className="form-group">
          <label>Ninja Points</label>
          <input
            value={this.state.ninjapoints}
            type="text"
            className="form-control"
            placeholder="Enter NinjaPoints"
            name="ninja-points"
            onChange={this.handleninjapointsChange}
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
          onClick={this.handleSubmit}
        >
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="/#">password?</a>
        </p>
      </form>
    );
  }
}
