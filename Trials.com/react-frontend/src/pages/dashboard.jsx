import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../components/navbar.component";
import { MainLB } from "../components/main-leaderboard.component";
import { StickyTable } from "../components/sticky-table";

export default function Dashboard() {
  return (
    <div>
      <NavBar />
      <StickyTable />
    </div>
  );
}
