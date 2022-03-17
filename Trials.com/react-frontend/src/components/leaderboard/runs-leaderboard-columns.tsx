import { Cell, Column, Row } from "react-table";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SelectColumnFilter } from "./filters/select-filter";
import { SliderColumnFilter, filterBetween } from "./filters/slider-filter";
import { InfoTip } from "../help-info/info-tips";
import { formatCreateDate } from "../helpers/format-dates";
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { getRunsLB } from "./leaderboard-requests";
import { Link } from "react-router-dom";
import { CenteredModal } from "../leaderboard/centered-modal";

export const RunsLeaderboardColumns = [
    {
        Header: "Rider", // Header is the title for the column being displayed (can be anything)
        accessor: "rider", // accessor is based off of the prisma schemas name mapped for the database column you want
        disableFilters: true,
    },
    {
        Header: "Track",
        accessor: "track_name",
        disableFilters: true,
    },
    {
        Header: "Creator",
        accessor: "creator",
        disableFilters: true,
    },
    {
        Header: "Ninja Points",
        accessor: "ninja_points",
        Filter: SliderColumnFilter,
        filter: filterBetween,
        width: 115,
    },
    {
        Header: "Ninja Level",
        accessor: "ninja_level",
        width: 110,
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },

    {
        Header: "Faults",
        accessor: "faults",
        Filter: SliderColumnFilter,
        filter: filterBetween,
        width: 90,
    },
    {
        Header: "Time",
        accessor: "time",
        width: 105,
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },
    {
        Header: "Length",
        accessor: "length",
        width: 90,
        Filter: SelectColumnFilter,
        filter: "equals",
    },
    {
        Header: "Consistency",
        accessor: "consistency",
        width: 128,
        Filter: SelectColumnFilter,
        filter: "equals",
    },
    {
        Header: "Rating",
        accessor: "rating",
        width: 90,
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },
    {
        Header: "Video",
        accessor: "video",
        width: 75,
        disableFilters: true,
    },
    {
        Header: "Date",
        accessor: "date",
        width: 105,
        disableFilters: true,
    },
];

export const setRunsTableBodyCell = (
    cell: Cell,
    row: Row,
    currentUsername: any
) => {
    if (cell.column.Header === "Rider") {
        return row.values.rider === currentUsername ? (
            <div id="edit-run-link-container">
                <Link
                    className={"edit-run link icon"}
                    to={
                        "/edit-run/" +
                        row.values.rider +
                        "?track=" +
                        row.values.track_name +
                        "&creator=" +
                        row.values.creator
                    }
                    state={{
                        rider: row.values.rider,
                        track: row.values.track_name,
                        creator: row.values.creator,
                        rank: row.values.rank,
                        faults: row.values.faults,
                        time: row.values.time,
                        ninjaLevel: row.values.ninja_level,
                        length: row.values.length,
                        consistency: row.values.consistency,
                        video: row.values.video,
                        rating: row.values.rating,
                        ninjaPoints: row.values.ninja_points,
                    }}
                >
                    <FontAwesomeIcon
                        id="edit-run-icon"
                        icon={faEdit}
                        size="2x"
                        tabIndex={-1}
                    />
                </Link>
                <Link
                    className={"current-user-row-cell"}
                    to={"/profile/" + row.values.rider}
                    state={{ user: row.values.rider }}
                >
                    {cell.render("Cell")}
                </Link>
                <FontAwesomeIcon
                    className="invisible-element"
                    icon={faEdit}
                    size="2x"
                    tabIndex={-1}
                />
            </div>
        ) : (
            <Link
                className={"user-row-cell"}
                to={"/profile/" + row.values.rider}
                state={{ user: row.values.rider }}
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
                className="row-cell"
                to={
                    "/track/track=" +
                    row.values.track_name +
                    "&creatorName=" +
                    row.values.creator
                }
                state={{
                    track: row.values.track_name,
                    creator: row.values.creator,
                }}
            >
                {cell.render("Cell")}
            </Link>
        );
    } else if (cell.column.Header === "Video") {
        if (
            cell.value === "" ||
            cell.value === null ||
            cell.value === undefined
        ) {
            return "N/A";
        } else {
            return <CenteredModal url={cell.value} />;
        }
    } else if (cell.column.Header === "Consistency") {
        return cell.value?.replace("_", " ");
    } else {
        return <div>{cell.render("Cell")}</div>;
    }
};

export const setRunsTableHeaderInfoTip = (column: Column) => {
    if (column.Header === "Consistency") {
        return InfoTip(
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
    } catch (error: any) {}
};

export const runsLBEffect = (setData: any, date?: Date, runs?: any) => {
    runs !== 0 ? resolveData(setData, runs, date) : resolveData(setData, date);
};
