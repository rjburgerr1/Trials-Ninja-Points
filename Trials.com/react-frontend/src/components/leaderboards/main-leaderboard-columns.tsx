export const COLUMNS = [
  {
    Header: "Username", // Header is the title for the column being displayed (can be anything)
    accessor: "username", // accessor is based off of the prisma schemas name mapped for the database column you want
  },
  {
    Header: "Total NP",
    accessor: "total_ninja_points",
  },
  {
    Header: "Best Run (np)",
    accessor: "highest_np_run",
  },
  {
    Header: "Highest Level Pass",
    accessor: "highest_level_pass",
  },
];
