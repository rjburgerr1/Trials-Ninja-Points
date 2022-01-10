import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Cell, Column, Row } from "react-table";
import { infoTip } from "../help-info/info-tips";
import { getTracksLB } from "./leaderboard-requests";
import { SelectColumnFilter } from "./filters/select-filter";
import { filterBetween, SliderColumnFilter } from "./filters/slider-filter";

export const TracksLeaderboardColumns = [
    {
        Header: "Track", // Header is the title for the column being displayed (can be anything)
        accessor: "track_name", // accessor is based off of the prisma schemas name mapped for the database column you want
        disableFilters: true,
    },
    {
        Header: "Creator",
        accessor: "creator",
        disableFilters: true,
    },
    {
        Header: "Ninja Level",
        accessor: "ninja_level",
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },
    {
        Header: "Length",
        accessor: "length",
        Filter: SelectColumnFilter,
        filter: "equals",
    },
    {
        Header: "Ninja Points (Avg)",
        accessor: "average_np",
        width: 180,
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },
    {
        Header: "Faults (Avg)",
        accessor: "average_faults",
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },
    {
        Header: "Consistency",
        accessor: "consistency",
        Filter: SelectColumnFilter,
        filter: "equals",
    },
];

export const setTracksTableBodyCell = (cell: Cell, row: Row) => {
    if (cell.column.Header === "Track") {
        return (
            <Link
                to={
                    "/track/track=" +
                    row.values.track_name +
                    "&creatorName=" +
                    row.values.creator
                }
                state={{
                    track: row.values.track_name,
                    creatorName: row.values.creator,
                }}
                replace
            >
                {cell.render("Cell")}
            </Link>
        );
    } else {
        return <div>{cell.render("Cell")}</div>;
    }
};

export const setTracksTableHeaderInfoTip = (column: Column) => {
    if (column.Header === "Ninja Points (Avg)") {
        return infoTip(
            "average-np-run",
            "This column lists the ninja point averages of all runs on the given track"
        );
    } else if (column.Header === "Faults (Avg)") {
        return infoTip(
            "average-faults",
            "This column lists the average faults for a run on the given track"
        );
    } else if (column.Header === "Consistency") {
        return infoTip(
            "consistency",
            "This describes how consistent a track is, in other words how 'luck'-based it is"
        );
    } else {
        return (
            <span className="invisible-element">
                <FontAwesomeIcon icon={faSortAmountDown} size="1x" />
            </span>
        );
    }
};

export const resolveData = async (setData: any, date?: Date) => {
    try {
        const data = await getTracksLB(date ? date : undefined);

        setData(data);
    } catch (err) {
        console.error(err);
    }
};

export const tracksLBEffect = (setData: any, date?: Date, runs?: any) => {
    resolveData(setData, date);
};
