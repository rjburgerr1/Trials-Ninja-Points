import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../components/navbar.component";

export default function Dashboard() {
  return <NavBar />;
}
