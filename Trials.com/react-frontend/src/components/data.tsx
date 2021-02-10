import React, { useState } from "react";
import NavBar from "../components/navbar";

import "../styling/profile.scss";
import axios from "axios";

export default async function getMainLB() {
  // Currently only work for retrieving the current users data
  const result = await axios.get("/main-leaderboard", {});
  console.log(result);
  //result returns object with all relevant profile info fields
  return result.data;
}

export async function getRunsLB() {
  // Currently only work for retrieving the current users data
  const result = await axios.get("/runs-leaderboard", {});
  console.log(result);
  //result returns object with all relevant profile info fields
  return result.data;
}
