import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Logout() {
  const [setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/signin");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Button variant="link" onClick={handleLogout}>
      Log Out
    </Button>
  );
}
