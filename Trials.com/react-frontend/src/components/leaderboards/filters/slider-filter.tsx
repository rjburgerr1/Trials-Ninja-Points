import React, { useState, useMemo } from "react";
import { Row } from "react-table";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
    return `${value}`;
}

// This is a custom filter UI that uses a
// slider to set the filter values between a column's
// min and max values
export const SliderColumnFilter = ({
    column: { filterValue, setFilter, preFilteredRows, id },
}: any) => {
    const [value, setValue] = useState([0, 0]);
    // Calculate the min and max
    // using the preFilteredRows
    const [min, max] = useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        preFilteredRows.forEach((row: Row) => {
            min = Math.min(row.values[id], min);
            max = Math.max(row.values[id], max);
        });
        setValue([min, max]);
        return [min, max];
    }, [id, preFilteredRows]);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
        setFilter(value);
    };

    return (
        <div className="table-header-filter">
            <Box sx={{ width: 80 }}>
                <Slider
                    className="slider"
                    min={min}
                    max={max}
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>
        </div>
    );
};

// Define a custom filter function for row values in between 2 bounds
export const filterBetween = (
    rows: Array<Row>,
    id: any,
    filterValue: Array<String>
) => {
    return rows.filter((row) => {
        const rowValue = row.values[id];
        return rowValue >= filterValue[0] && rowValue <= filterValue[1];
    });
};
