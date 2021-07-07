import React from "react";
import NavBar from "../components/navbar";
import { StickyTable } from "../components/leaderboards/sticky-table";

export default function Dashboard(props: any) {
    return (
        <div>
            <NavBar {...props} />
            <StickyTable />
        </div>
    );
}
