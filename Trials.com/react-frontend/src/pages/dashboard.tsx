import React from "react";
import NavBar from "../components/navbar";
import "../styling/dashboard.scss";
import { MainLeaderboard } from "../components/leaderboards/main-leaderboard";

export default function Dashboard(props: any) {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <NavBar {...props} />
            </div>

            <div className="dashboard-body">
                <MainLeaderboard />
            </div>
        </div>
    );
}
