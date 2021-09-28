import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

// For testing any data api requests or node server related fetching, change this URL to process.env.REACT_APP_AXIOS_BASE_URL
// For production any data api requests or node server related fetching, change this URL to process.env.REACT_APP_AXIOS_BASE_URL_PROD
axios.defaults.baseURL = process.env.REACT_APP_AXIOS_BASE_URL;

ReactDOM.render(<App />, document.getElementById("root"));
