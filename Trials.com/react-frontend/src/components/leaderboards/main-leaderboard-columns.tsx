import { SliderColumnFilter, filterBetween } from "./filters/slider-filter";
import { SelectColumnFilter } from "./filters/select-filter";
import { Cell, Row } from "react-table";

export const COLUMNS = [
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
