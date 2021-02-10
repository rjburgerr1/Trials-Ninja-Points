export const COLUMNS = [
  {
    Header: "Rider", // Header is the title for the column being displayed (can be anything)
    accessor: "rider", // accessor is based off of the prisma schemas name mapped for the database column you want
  },
  {
    Header: "Track",
    accessor: "trackName",
  },
  {
    Header: "Ninja Points",
    accessor: "ninjaPoints",
  },
  {
    Header: "Ninja Level (Opinion)",
    accessor: "ninjaLevel",
  },
  {
    Header: "Rank",
    accessor: "rank",
  },
  {
    Header: "Faults",
    accessor: "faults",
  },
  {
    Header: "Time",
    accessor: "time",
  },
  {
    Header: "Length (Opinion)",
    accessor: "length",
  },
  {
    Header: "Fault Sponginess (Opinion)",
    accessor: "faultSponginess",
  },
  {
    Header: "Rating (Opinion)",
    accessor: "rating",
  },
];
