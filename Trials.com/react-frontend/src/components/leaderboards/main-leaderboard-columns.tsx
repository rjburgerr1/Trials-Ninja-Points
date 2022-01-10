import { SliderColumnFilter, filterBetween } from "./filters/slider-filter";
import { SelectColumnFilter } from "./filters/select-filter";
import { Cell, Column, Row } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { infoTip } from "../help-info/info-tips";
import ReactCountryFlag from "react-country-flag";
import { getMainLB } from "./leaderboard-requests";
import { Link } from "react-router-dom";

export const MainLeaderboardColumns = [
    {
        Header: "Rank",
        accessor: "rank",
        id: "row",
        filterable: false,
        Cell: (cell: Cell) => {
            return <div>{cell.row.index + 1}</div>;
        },
        width: 100,
        disableFilters: true,
    },
    {
        Header: "Username", // Header is the title for the column being displayed (can be anything)
        accessor: "username", // accessor is based off of the prisma schemas name mapped for the database column you want
        // disable the filter for particular column
        disableFilters: true,
    },
    {
        Header: "Origin",
        accessor: "country",
        width: 90,
        // disable the filter for particular column
        disableFilters: true,
    },
    {
        Header: "Ninja Points (100)",
        accessor: "total_ninja_points",
        Filter: SliderColumnFilter,
        filter: filterBetween,
        width: 180,
    },
    {
        Header: "Best Run (NP)",
        accessor: "highest_np_run",
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },
    {
        Header: "Highest Level Passed",
        accessor: "highest_level_pass",
        width: 200,
        Filter: SelectColumnFilter,
        filter: "equals",
    },
];

export const setMainTableBodyCell = (cell: Cell, row: Row) => {
    if (cell.column.Header === "Username") {
        return (
            <Link
                to={"profile/" + row.values.username}
                state={{ user: row.values.username }}
            >
                {cell.render("Cell")}
            </Link>
            //<a href={"profile/" + row.values.username}>{cell.render("Cell")}</a>
        );
    } else if (cell.column.Header === "Origin") {
        return cell.value !== "N/A" ? (
            <ReactCountryFlag
                className="country-flag"
                countryCode={cell.value}
                svg
                title={cell.value}
            />
        ) : (
            "N/A"
        );
    } else {
        return <div>{cell.render("Cell")}</div>;
    }
};

export const setMainTableHeaderInfoTip = (column: Column) => {
    if (column.Header === "Ninja Points (100)") {
        return infoTip(
            "total-np",
            "Total Ninja Points summed from the rider's top 100 runs"
        );
    } else if (column.Header === "Origin") {
        return infoTip(
            "origin",
            "Country from which the rider is originally from"
        );
    } else if (column.Header === "Best Run (NP)") {
        return infoTip(
            "best-run",
            "Ninja points for the rider's best run they have submitted"
        );
    } else if (column.Header === "Highest Level Pass") {
        return infoTip("highest-level", "The rider's highest level passed");
    } else {
        return (
            <span className="invisible-element">
                <FontAwesomeIcon icon={faSortAmountDown} size="1x" />
            </span>
        );
    }
};

const resolveData = async (setData: any, date?: Date) => {
    try {
        const data = await getMainLB(date ? date : undefined);

        setData(data);
    } catch (error: any) {
        console.error(error.message);
    }
};

export const mainLBEffect = (setData: any, date?: Date) => {
    resolveData(setData, date);
};
