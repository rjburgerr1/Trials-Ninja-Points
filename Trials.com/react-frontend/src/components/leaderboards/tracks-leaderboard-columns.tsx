import { SelectColumnFilter } from "./filters/select-filter";
import { filterBetween, SliderColumnFilter } from "./filters/slider-filter";

export const COLUMNS = [
    {
        Header: "Track", // Header is the title for the column being displayed (can be anything)
        accessor: "track_name", // accessor is based off of the prisma schemas name mapped for the database column you want
        disableFilters: true,
    },
    {
        Header: "Creator",
        accessor: "creator",
        disableFilters: true,
    },
    {
        Header: "Ninja Level",
        accessor: "ninja_level",
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },
    {
        Header: "Length",
        accessor: "length",
        Filter: SelectColumnFilter,
        filter: "equals",
    },
    {
        Header: "Ninja Points (Avg)",
        accessor: "average_np",
        width: 180,
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },
    {
        Header: "Faults (Avg)",
        accessor: "average_faults",
        Filter: SliderColumnFilter,
        filter: filterBetween,
    },
    {
        Header: "Consistency",
        accessor: "consistency",
        Filter: SelectColumnFilter,
        filter: "equals",
    },
];
