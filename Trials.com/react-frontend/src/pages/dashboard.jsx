import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/auth-context";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../components/navbar";
import { MainLB } from "../components/leaderboards/main-leaderboard";
import { StickyTable } from "../components/leaderboards/sticky-table";

export default function Dashboard() {
  return (
    <div>
      <NavBar />
      <StickyTable />
    </div>
  );
}
