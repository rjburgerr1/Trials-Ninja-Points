import { COLUMNS } from "./tracks-leaderboard-columns";
import {
    Cell,
    Column,
    Row,
    useBlockLayout,
    useFilters,
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable,
} from "react-table";
import {
    faSortAmountDown,
    faSortAmountUpAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";
import { useSticky } from "react-table-sticky";
import { getTracksLB } from "../leaderboard-requests";
import { infoTip } from "../help-info/info-tips";
import { GlobalFilter } from "./filters/global-filter";

import DatePicker from "react-datepicker";

const resolveData = async (setData: any, date?: Date) => {
    try {
        const data = await getTracksLB(date ? date : undefined);

        setData(data);
    } catch (err) {
        console.error(err);
    }
};

export const TracksLeaderboard = () => {
    let [data, setData] = useState([{}]);
    const [date, setDate] = useState(new Date());
    const columns: Array<Column> = useMemo(() => COLUMNS, []);

    useEffect(() => {
        resolveData(setData, date);
    }, [date]); // includes empty dependency array

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
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex: 0,
                pageSize: 50,
                sortBy: [
                    {
                        id: "total_ninja_points",
                        desc: true,
                    },
                ],
            },
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        useBlockLayout,
        useSticky,
        usePagination
    );

    const { pageIndex, pageSize } = state;

    const validatePageNumber = (pageNumber: number, maxPageNumber: number) => {
        if (pageNumber <= maxPageNumber && pageNumber >= 0) {
            gotoPage(pageNumber);
        }
    };

    const setTableBodyCell = (cell: Cell, row: Row) => {
        if (cell.column.Header === "Track") {
            return (
                <a
                    href={
                        "track/name=" +
                        row.values.track_name +
                        "&creator=" +
                        row.values.creator
                    }
                >
                    {cell.render("Cell")}
                </a>
            );
        } else {
            return <div>{cell.render("Cell")}</div>;
        }
    };

    const setTableHeaderInfoTip = (column: Column) => {
        if (column.Header === "Ninja Points (Avg)") {
            return infoTip(
                "average-np-run",
                "This column lists the ninja point averages of all runs on the given track"
            );
        } else if (column.Header === "Faults (Avg)") {
            return infoTip(
                "average-faults",
                "This column lists the average faults for a run on the given track"
            );
        } else if (column.Header === "Consistency") {
            return infoTip(
                "consistency",
                "This describes how consistent a track is, in other words how 'luck'-based it is"
            );
        } else {
            return (
                <span className="invisible-element">
                    <FontAwesomeIcon icon={faSortAmountDown} size="1x" />
                </span>
            );
        }
    };

    return (
        <div className="leaderboard">
            <div className="leaderboard-container">
                <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />

                <DatePicker
                    locale="es"
                    selected={date}
                    onChange={(date: Date) => setDate(date)}
                />

                <div {...getTableProps()} className="leaderboard-table">
                    <div className="leaderboard-header">
                        {headerGroups.map((headerGroup) => (
                            <div
                                {...headerGroup.getHeaderGroupProps()}
                                className="leaderboard-header-row"
                            >
                                {headerGroup.headers.map((column) => (
                                    <div
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps()
                                        )}
                                        className="leaderboard-header-row-column"
                                    >
                                        {setTableHeaderInfoTip(column)}
                                        <span className="leaderboard-header-row-value">
                                            {column.render("Header")}
                                        </span>
                                        <span className="column-sort-icon">
                                            {column.isSorted ? (
                                                column.isSortedDesc ? (
                                                    <FontAwesomeIcon
                                                        icon={faSortAmountDown}
                                                        size="1x"
                                                    />
                                                ) : (
                                                    <FontAwesomeIcon
                                                        icon={faSortAmountUpAlt}
                                                        size="1x"
                                                    />
                                                )
                                            ) : (
                                                <FontAwesomeIcon
                                                    icon={faSortAmountUpAlt}
                                                    size="1x"
                                                    className="column-sort-icon-invisible"
                                                />
                                            )}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="leaderboard-header">
                        {headerGroups.map((headerGroup) => (
                            <div
                                {...headerGroup.getHeaderGroupProps()}
                                className="leaderboard-header-row"
                            >
                                {headerGroup.headers.map((column) => (
                                    <div
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps()
                                        )}
                                        className="leaderboard-header-row-column"
                                    >
                                        {column.canFilter
                                            ? column.render("Filter")
                                            : null}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div {...getTableBodyProps()} className="leaderboard-body">
                        {page.map((row) => {
                            prepareRow(row);

                            return (
                                <div
                                    {...row.getRowProps()}
                                    className="leaderboard-body-row"
                                >
                                    {row.cells.map((cell) => (
                                        <div
                                            {...cell.getCellProps()}
                                            className="leaderboard-body-row-value"
                                        >
                                            {setTableBodyCell(cell, row)}
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="leaderboard-info">
                <span className="page-number-nav">
                    <button
                        className="first-page"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                    >
                        {"<<"}
                    </button>
                    <button
                        className="previous-page"
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        Previous
                    </button>
                </span>

                <div className="page-info">
                    <span className="page-number-input-container">
                        <label className="page-label">Page</label>
                        <input
                            className="page-number-input"
                            defaultValue={pageIndex + 1}
                            max={pageOptions.length}
                            min="1"
                            onChange={(e) => {
                                validatePageNumber(
                                    Number(e.target.value) - 1,
                                    pageOptions.length
                                );
                            }}
                            type="number"
                        />
                    </span>

                    <span className="page-number-container">
                        Page{" "}
                        <strong className="page-number">{pageIndex + 1}</strong>{" "}
                        -
                        <strong className="page-number">
                            {" "}
                            {pageOptions.length}
                        </strong>
                    </span>

                    <select
                        className="show-page-size"
                        value={pageSize}
                        onChange={(e) => setPageSize(Number(e.target.value))}
                    >
                        {[50, 100, 250].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
                <span className="page-number-nav">
                    <button
                        className="next-page"
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                    >
                        Next
                    </button>
                    <button
                        className="last-page"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    >
                        {">>"}
                    </button>
                </span>
            </div>
        </div>
    );
};
