import React, { useEffect, useMemo, useState } from "react";
import {
    useTable,
    useBlockLayout,
    usePagination,
    Column,
    useSortBy,
} from "react-table";
import { useSticky } from "react-table-sticky";
import { Styles } from "./TableStyles";
import NavBar from "../navbar";
import { COLUMNS } from "./runs-leaderboard-columns";
import "./table.css";
import { getRunsLB } from "../data";

const resolveData = async (setData: any) => {
    try {
        const data = await getRunsLB();

        setData(data);
    } catch (err) {
        console.error(err.message);
    }
};
export const Runs = (props: any) => {
    const columns: Array<Column> = useMemo(() => COLUMNS, []);
    let [data, setData] = useState([{}]);

    useEffect(() => {
        resolveData(setData);
    }, []); // includes empty dependency array

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
        useSortBy,
        useBlockLayout,
        useSticky,
        usePagination
    );

    const { pageIndex, pageSize } = state;

    return (
        <>
            <NavBar {...props} />
            <div>
                <span>
                    Page{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{" "}
                </span>
                <span>
                    | Go to page:{" "}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                            const pageNumber = e.target.value
                                ? Number(e.target.value) - 1
                                : 0;
                            gotoPage(pageNumber);
                        }}
                    />
                </span>
                <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    {[10, 25, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {"<<"}
                </button>
                <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                    Previous
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>
                <button
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                    {">>"}
                </button>
            </div>
            <Styles>
                <div
                    {...getTableProps()}
                    className="table sticky"
                    style={{ borderWidth: 0, height: 500 }}
                >
                    <div className="header">
                        {headerGroups.map((headerGroup) => (
                            <div
                                {...headerGroup.getHeaderGroupProps()}
                                className="tr"
                            >
                                {headerGroup.headers.map((column) => (
                                    <div
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps()
                                        )}
                                        className="th"
                                    >
                                        {column.render("Header")}
                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? "\\/"
                                                    : "^"
                                                : ""}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div {...getTableBodyProps()} className="body">
                        {page.map((row) => {
                            prepareRow(row);

                            return (
                                <div {...row.getRowProps()} className="tr">
                                    {row.cells.map((cell) => (
                                        <div
                                            {...cell.getCellProps()}
                                            className="td"
                                        >
                                            {cell.column.Header ===
                                            "Username" ? (
                                                <a
                                                    href={
                                                        "profile/" +
                                                        row.values.username
                                                    }
                                                >
                                                    {cell.render("Cell")}
                                                </a>
                                            ) : (
                                                <div>{cell.render("Cell")}</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Styles>
        </>
    );
};
