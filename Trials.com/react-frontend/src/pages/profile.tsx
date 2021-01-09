import React, { useState } from "react";
import NavBar from "../components/navbar";

import "../styling/profile.scss";
import { useAuth } from "../contexts/auth-context";
import axios from "axios";
import Icon from "../components/icon";

const getUsername = async (userID: string) => {
  // Currently only work for retrieving the current users data
  const result = await axios.get("/username", {
    params: {
      uid: userID,
    },
  });
  return result.data.username;
};

const getBio = async (userID: string) => {
  // Currently only work for retrieving the current users data
  const result = await axios.get("/bio", {
    params: {
      uid: userID,
    },
  });
  return result.data.bio;
};

const getCountry = async (userID: string) => {
  // Currently only work for retrieving the current users data
  const result = await axios.get("/country", {
    params: {
      uid: userID,
    },
  });
  return result.data.country;
};
const getRuns = async (userID: string) => {
  // Currently only work for retrieving the current users data
  const result = await axios.get("/number-of-runs", {
    params: {
      uid: userID,
    },
  });
  return result.data.runs;
};

const getHighestRun = async (userID: string) => {
  // Currently only work for retrieving the current users data
  const result = await axios.get("/highest-run", {
    params: {
      uid: userID,
    },
  });
  return result.data.highest_np_run;
};

const getRank = async (userID: string) => {
  // Currently only work for retrieving the current users data
  const result = await axios.get("/rank", {
    params: {
      uid: userID,
    },
  });
  return result.data.rank;
};

const getTotalNP = async (userID: string) => {
  // Currently only work for retrieving the current users data
  const result = await axios.get("/total-np", {
    params: {
      uid: userID,
    },
  });
  return result.data.total_ninja_points;
};

const getCreateDate = async (userID: string) => {
  // Currently only work for retrieving the current users data
  const result = await axios.get("/create-date", {
    params: {
      uid: userID,
    },
  });
  return result.data.create_date;
};

const getHighestLevelPass = async (userID: string) => {
  // Currently only work for retrieving the current users data
  const result = await axios.get("/highest-level-pass", {
    params: {
      uid: userID,
    },
  });
  return result.data.highest_level_pass;
};

const getAliases = async (userID: string) => {
  // Currently only work for retrieving the current users data
  const result = await axios.get("/aliases", {
    params: {
      uid: userID,
    },
  });
  return result.data.aliases;
};

const getProfileInfo = async (userID: string) => {
  // Currently only work for retrieving the current users data
  const result = await axios.get("/profile-info", {
    params: {
      uid: userID,
    },
  });
  //result returns object with all relevant profile info fields
  return result.data;
};
const Profile: React.FC<boolean> = (isCurrentUser: boolean) => {
  const { currentUser } = useAuth();
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [country, setCountry] = useState("");
  const [runs, setRuns] = useState(0);
  const [highestNPRun, setHighestNPRun] = useState(0);
  const [rank, setRank] = useState(0);
  const [totalNP, setTotalNP] = useState(0);
  const [createDate, setCreateDate] = useState("");
  const [highestLevelPass, setHighestLevelPass] = useState("");
  const [aliases, setAliases] = useState("");

  setProfileValuesInOne(
    setRuns,
    setBio,
    setUsername,
    setCountry,
    setHighestNPRun,
    setRank,
    setTotalNP,
    setCreateDate,
    setHighestLevelPass,
    setAliases,
    currentUser
  );

  return (
    <div className="profile-banner">
      <NavBar />
      <div className="grid-container">
        <div className="grid-item">
          <Icon /> {username}
        </div>
        <div className="grid-item">Bio - {bio}</div>
        <div className="grid-item">Country - {country}</div>
        <div className="grid-item"># of Runs -{runs}</div>

        <div className="grid-item">
          Highest Ninja Points Run - {highestNPRun}
        </div>
        <div className="grid-item">Rank - {rank}</div>
        <div className="grid-item">Total Ninja Points - {totalNP}</div>
        <div className="grid-item">Account Created - {createDate}</div>
        <div className="grid-item">Aliases - {aliases}</div>
        <div className="grid-item">Highest Level Pass - {highestLevelPass}</div>
      </div>
    </div>
  );
};
export default Profile;

const setProfileValuesInOne = (
  setRuns: any,
  setBio: any,
  setUsername: any,
  setCountry: any,
  setHighestNPRun: any,
  setRank: any,
  setTotalNP: any,
  setCreateDate: any,
  setHighestLevelPass: any,
  setAliases: any,
  currentUser: any
) => {
  getProfileInfo(currentUser.uid).then((value) => {
    setRuns(value.runs);
    setBio(value.bio);
    setUsername(value.username);
    setCountry(value.country);
    setHighestNPRun(value.highest_np_run);
    setRank(value.rank);
    setTotalNP(value.total_ninja_points);
    setCreateDate(value.create_date);
    setHighestLevelPass(value.highest_level_pass);
    setAliases(value.aliases);
  });
};
