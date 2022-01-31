import {
    Column,
    useBlockLayout,
    useGlobalFilter,
    useFilters,
    usePagination,
    useSortBy,
    useTable,
} from "react-table";
import {
    faSortAmountDown,
    faSortAmountUpAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalFilter } from "./filters/global-filter";
import { useEffect, useMemo, useState } from "react";
import { useSticky } from "react-table-sticky";
import DatePicker from "react-datepicker";
import { LeaderboardNavigation } from "./leaderboard-navigation";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "../../contexts/auth-context";

export const Leaderboard = (props: any) => {
    let [data, setData] = useState([{}]);
    const [date, setDate] = useState(new Date());
    const { currentUser } = useAuth();
    const columns: Array<Column> = useMemo(() => props.columns, []);

    useEffect(() => {
        props.effect(setData, date, props.runs ? props.runs : undefined);
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
                        id: props.sortBy,
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
                    <div className="leaderboard-header-container">
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
                                            {props.setTableHeaderInfoTip(
                                                column
                                            )}

                                            <span className="leaderboard-header-row-value">
                                                {column.render("Header")}
                                            </span>

                                            <span className="column-sort-icon">
                                                {column.isSorted ? (
                                                    column.isSortedDesc ? (
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faSortAmountDown
                                                            }
                                                            size="1x"
                                                        />
                                                    ) : (
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faSortAmountUpAlt
                                                            }
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
                                            {props.setTableBodyCell(
                                                cell,
                                                row,
                                                currentUser.displayName
                                            )}
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <LeaderboardNavigation
                id="leaderboard-nav"
                state={state}
                nextPage={nextPage}
                previousPage={previousPage}
                canNextPage={canNextPage}
                canPreviousPage={canPreviousPage}
                pageOptions={pageOptions}
                gotoPage={gotoPage}
                pageCount={pageCount}
                setPageSize={setPageSize}
            />
        </div>
    );
};
