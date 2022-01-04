import React, { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const [error, setError] = useState("");
    const { logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        setError("");

        try {
            await logout();
            navigate("/signin");
        } catch {
            setError("Failed to log out" + error);
        }
    }

    return <Button onClick={handleLogout}>Log Out</Button>;
}
