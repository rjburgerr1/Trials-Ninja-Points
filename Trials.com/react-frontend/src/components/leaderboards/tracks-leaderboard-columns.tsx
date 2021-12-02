export const COLUMNS = [
    {
        Header: "Track", // Header is the title for the column being displayed (can be anything)
        accessor: "track_name", // accessor is based off of the prisma schemas name mapped for the database column you want
    },
    {
        Header: "Creator",
        accessor: "creator",
    },
    {
        Header: "Ninja Level",
        accessor: "ninja_level",
    },
    {
        Header: "Length",
        accessor: "length",
    },
    {
        Header: "Ninja Points (Avg)",
        accessor: "average_np",
        width: 180,
    },
    {
        Header: "Faults (Avg)",
        accessor: "average_faults",
    },
    {
        Header: "Consistency",
        accessor: "consistency",
    },
];
