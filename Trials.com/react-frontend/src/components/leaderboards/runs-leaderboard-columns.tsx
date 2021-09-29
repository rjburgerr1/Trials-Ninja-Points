export const COLUMNS = [
    {
        Header: "Rider", // Header is the title for the column being displayed (can be anything)
        accessor: "rider", // accessor is based off of the prisma schemas name mapped for the database column you want
    },
    {
        Header: "Track",
        accessor: "track_name",
        width: 210,
    },
    {
        Header: "Ninja Points",
        accessor: "ninja_points",
        width: 125,
    },
    {
        Header: "Ninja Level",
        accessor: "ninja_level",
        width: 125,
    },
    {
        Header: "Rank",
        accessor: "rank",
        width: 110,
    },
    {
        Header: "Faults",
        accessor: "faults",
        width: 105,
    },
    {
        Header: "Time",
        accessor: "time",
        width: 120,
    },
    {
        Header: "Length",
        accessor: "length",
        width: 110,
    },
    {
        Header: "Fault Sponginess",
        accessor: "fault_sponginess",
        width: 165,
    },
    {
        Header: "Rating",
        accessor: "rating",
        width: 110,
    },
];
