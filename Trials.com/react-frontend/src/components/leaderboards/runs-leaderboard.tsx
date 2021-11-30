import {
    Column,
    useBlockLayout,
    usePagination,
    useSortBy,
    useTable,
} from "react-table";
import { COLUMNS } from "./runs-leaderboard-columns";
import {
    faSortAmountDown,
    faSortAmountUpAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRunsLB } from "../leaderboard-requests";
import { useEffect, useMemo, useState } from "react";
import { useSticky } from "react-table-sticky";

const resolveData = async (setData: any, runs?: any) => {
    try {
        // If runs argument is provided, use that instead
        if (runs) {
            setData(runs);
        } else {
            const data = await getRunsLB();
            setData(data);
        }
    } catch (error: any) {
        console.error(error.message);
    }
};

export const RunsLeaderboard = (props?: any) => {
    let [data, setData] = useState([{}]);
    const columns: Array<Column> = useMemo(() => COLUMNS, []);

    useEffect(() => {
        // Check if there are already runs provided to fill the leaderboard component, if so,
        // use those in place of getting all runs
        props.runs !== 0
            ? resolveData(setData, props.runs)
            : resolveData(setData);
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
            initialState: { pageIndex: 0, pageSize: 50 },
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
