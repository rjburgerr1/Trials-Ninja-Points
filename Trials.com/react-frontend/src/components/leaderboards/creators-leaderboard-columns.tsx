import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cell, Column, Row } from "react-table";
import { infoTip } from "../Help-info/info-tips";
import { getCreatorsLB } from "./leaderboard-requests";
import { SelectColumnFilter } from "./filters/select-filter";
import { filterBetween, SliderColumnFilter } from "./filters/slider-filter";

export const CreatorsLeaderboardColumns = [
    {
        Header: "Creator",
        accessor: "creator",
        disableFilters: true,
    },
    {
        Header: "Ninja Level (Avg)",
        accessor: "average_track_ninja_level",
        Filter: SliderColumnFilter,
        filter: filterBetween,
        width: 180,
    },
    {
        Header: "Length (Avg)",
        accessor: "average_track_length",
        Filter: SelectColumnFilter,
        filter: "equals",
    },
    {
        Header: "Ninja Points (Avg)",
        accessor: "average_track_ninja_points",
        width: 180,
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },
    {
        Header: "Faults (Avg)",
        accessor: "average_track_faults",
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },
    {
        Header: "Consistency (Avg)",
        accessor: "average_track_consistency",
        Filter: SelectColumnFilter,
        filter: "equals",
        width: 180,
    },

    {
        Header: "Rating (Avg)",
        accessor: "average_track_rating",
        Filter: SelectColumnFilter,
        filter: "equals",
    },
];

export const setTableBodyCell = (cell: Cell, row: Row) => {
    return <div>{cell.render("Cell")}</div>;
};

export const setTableHeaderInfoTip = (column: Column) => {
    if (column.Header === "Ninja Points (Avg)") {
        return infoTip(
            "average-track-np",
            "This column lists the average amount of ninja points a rider gets across all tracks made by a creator"
        );
    } else if (column.Header === "Faults (Avg)") {
        return infoTip(
            "average-track-faults",
            "This column lists the average amount of faults across all tracks made by a creator"
        );
    } else if (column.Header === "Length (Avg)") {
        return infoTip(
            "average-track-length",
            "This column lists the average length across all tracks made by a creator"
        );
    } else if (column.Header === "Consistency (Avg)") {
        return infoTip(
            "average-track-consistency",
            "This column lists the average consistency across all tracks made by a creator"
        );
    } else if (column.Header === "Ninja Level (Avg)") {
        return infoTip(
            "average-track-ninja-level",
            "This column lists the average ninja level across all tracks made by a creator"
        );
    } else if (column.Header === "Rating (Avg)") {
        return infoTip(
            "average-track-rating",
            "This column lists the average rating across all tracks made by a creator"
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
        const data = await getCreatorsLB(date ? date : undefined);

        setData(data);
    } catch (err) {
        console.error(err);
    }
};

export const creatorsLBEffect = (setData: any, date?: Date, runs?: any) => {
    resolveData(setData, date);
};
