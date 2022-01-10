import { Cell, Column, Row } from "react-table";
import { SelectColumnFilter } from "./filters/select-filter";
import { SliderColumnFilter, filterBetween } from "./filters/slider-filter";
import { infoTip } from "../help-info/info-tips";
import { formatCreateDate } from "../helper-components/format-dates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { getRunsLB } from "./leaderboard-requests";
import { Link } from "react-router-dom";

export const RunsLeaderboardColumns = [
    {
        Header: "Rider", // Header is the title for the column being displayed (can be anything)
        accessor: "rider", // accessor is based off of the prisma schemas name mapped for the database column you want
        disableFilters: true,
    },
    {
        Header: "Track",
        accessor: "track_name",
        width: 210,
        disableFilters: true,
    },
    {
        Header: "Ninja Points",
        accessor: "ninja_points",
        Filter: SliderColumnFilter,
        filter: filterBetween,
        width: 125,
    },
    {
        Header: "Ninja Level",
        accessor: "ninja_level",
        width: 125,
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },
    {
        Header: "Rank",
        accessor: "rank",
        width: 110,
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },
    {
        Header: "Faults",
        accessor: "faults",
        Filter: SliderColumnFilter,
        filter: filterBetween,
        width: 110,
    },
    {
        Header: "Time",
        accessor: "time",
        width: 115,
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },
    {
        Header: "Length",
        accessor: "length",
        width: 110,
        Filter: SelectColumnFilter,
        filter: "equals",
    },
    {
        Header: "Consistency",
        accessor: "consistency",
        width: 155,
        Filter: SelectColumnFilter,
        filter: "equals",
    },
    {
        Header: "Rating",
        accessor: "rating",
        width: 110,
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },
    {
        Header: "Date",
        accessor: "date",
        width: 110,
        disableFilters: true,
    },
];

export const setRunsTableBodyCell = (cell: Cell, row: Row) => {
    if (cell.column.Header === "Rider") {
        return (
            <Link
                to={"/profile/" + row.values.username}
                state={{ user: row.values.username }}
                replace={true}
            >
                {cell.render("Cell")}
            </Link>
        );
    } else if (cell.column.Header === "Date") {
        return row.values.date ? (
            <div>{formatCreateDate(row.values.date)}</div>
        ) : null;
    } else if (cell.column.Header === "Track") {
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
                replace={true}
            >
                {cell.render("Cell")}
            </Link>
        );
    } else {
        return <div>{cell.render("Cell")}</div>;
    }
};

export const setRunsTableHeaderInfoTip = (column: Column) => {
    if (column.Header === "Consistency") {
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

const resolveData = async (setData: any, runs?: any, date?: Date) => {
    try {
        // If runs argument is provided, use that instead
        if (runs) {
            setData(runs);
        } else {
            const data = await getRunsLB(
                undefined,
                undefined,
                date ? date : undefined
            );
            setData(data);
        }
    } catch (error: any) {
        console.error(error.message);
    }
};

export const runsLBEffect = (setData: any, date?: Date, runs?: any) => {
    runs !== 0 ? resolveData(setData, runs, date) : resolveData(setData, date);
};
