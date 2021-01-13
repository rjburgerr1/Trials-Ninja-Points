import React from "react";
import NavBar from "../components/navbar";
import { StickyTable } from "../components/leaderboards/sticky-table";

export default function Dashboard() {
  return (
    <div>
      <NavBar />
      <StickyTable />
    </div>
  );
}
