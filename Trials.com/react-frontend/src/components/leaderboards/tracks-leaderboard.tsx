import { COLUMNS } from "./tracks-leaderboard-columns";
import {
    Cell,
    Column,
    Row,
    useBlockLayout,
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
import ReactCountryFlag from "react-country-flag";

const resolveData = async (setData: any) => {
    try {
        console.log("Request Track Data");
        const data = await getTracksLB();

        setData(data);
    } catch (err) {
        console.error(err);
    }
};

export const TracksLeaderboard = () => {
    let [data, setData] = useState([{}]);
    const columns: Array<Column> = useMemo(() => COLUMNS, []);

    useEffect(() => {
        resolveData(setData);
        console.log(data);
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

    return (
        <div className="leaderboard">
            <div className="leaderboard-container">
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
                                        <span className="invisible-element">
                                            <FontAwesomeIcon
                                                icon={faSortAmountDown}
                                                size="1x"
                                            />
                                        </span>
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
