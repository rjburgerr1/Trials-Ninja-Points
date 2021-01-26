import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "http://66.42.118.153/api";
ReactDOM.render(<App />, document.getElementById("root"));
