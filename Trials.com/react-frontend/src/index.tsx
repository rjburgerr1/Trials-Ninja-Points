import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

// For testing any data api requests or node server related fetching, change this URL to "http://localhost:3002"
// For production any data api requests or node server related fetching, change this URL to "https://trialsnpapi.page/api"
axios.defaults.baseURL = "http://localhost:3002";
ReactDOM.render(<App />, document.getElementById("root"));
