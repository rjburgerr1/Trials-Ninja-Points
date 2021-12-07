import { SelectColumnFilter } from "./filters/select-filter";
import { SliderColumnFilter, filterBetween } from "./filters/slider-filter";

export const COLUMNS = [
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
    },
    {
        Header: "Time",
        accessor: "time",
        width: 120,
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
        width: 165,
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
];
