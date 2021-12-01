import { COLUMNS } from "./main-leaderboard-columns";
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
import { infoTip } from "../help-info/info-tips";
import { useEffect, useMemo, useState } from "react";
import { useSticky } from "react-table-sticky";
import getData from "../leaderboard-requests";
import ReactCountryFlag from "react-country-flag";

const resolveData = async (setData: any) => {
    try {
        const data = await getData();

        setData(data);
    } catch (error: any) {
        console.error(error.message);
    }
};

const setTableBodyCell = (cell: Cell, row: Row) => {
    if (cell.column.Header === "Username") {
        return (
            <a href={"profile/" + row.values.username}>{cell.render("Cell")}</a>
        );
    } else if (cell.column.Header === "Origin") {
        return cell.value !== "N/A" ? (
            <ReactCountryFlag
                className="country-flag"
                countryCode={cell.value}
                svg
                title={cell.value}
            />
        ) : (
            "N/A"
        );
    } else {
        return <div>{cell.render("Cell")}</div>;
    }
};

export const MainLeaderboard = () => {
    let [data, setData] = useState([{}]);
    const columns: Array<Column> = useMemo(() => COLUMNS, []);

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

    const setTableHeaderInfoTip = (column: Column) => {
        if (column.Header === "Total NP") {
            return infoTip(
                "total-np",
                "Total Ninja Points summed from the rider's top 100 runs"
            );
        } else if (column.Header === "Origin") {
            return infoTip(
                "origin",
                "Country from which the rider is originally from"
            );
        } else if (column.Header === "Best Run (NP)") {
            return infoTip(
                "best-run",
                "Ninja points for the rider's best run they have submitted"
            );
        } else if (column.Header === "Highest Level Pass") {
            return infoTip("highest-level", "The rider's highest level passed");
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
