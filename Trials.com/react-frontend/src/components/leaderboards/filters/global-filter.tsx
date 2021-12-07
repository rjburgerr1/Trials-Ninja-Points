import React, { useState } from "react";
import {
    useTable,
    useFilters,
    useGlobalFilter,
    useAsyncDebounce,
    Row,
} from "react-table";
// Define a default UI for filtering
export const GlobalFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}: any) => {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <span className="global-filter">
            <span className="label">Search</span>
            <input
                className="search-input"
                value={value || ""}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
            />
        </span>
    );
};
