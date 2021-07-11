import { Cell } from "react-table";

export const COLUMNS = [
    {
        Header: "Rank",
        id: "row",
        filterable: false,
        Cell: (cell: Cell) => {
            return <div>{cell.row.index + 1}</div>;
        },
        width: 100,
    },
    {
        Header: "Username", // Header is the title for the column being displayed (can be anything)
        accessor: "username", // accessor is based off of the prisma schemas name mapped for the database column you want
    },
    {
        Header: "Origin",
        accessor: "country",
    },
    {
        Header: "Total NP",
        accessor: "total_ninja_points",
    },
    {
        Header: "Best Run (NP)",
        accessor: "highest_np_run",
    },
    {
        Header: "Highest Level Pass",
        accessor: "highest_level_pass",
    },
];
