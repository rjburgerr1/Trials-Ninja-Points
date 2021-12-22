export const LeaderboardNavigation = (props: any) => {
    const { pageIndex, pageSize } = props.state; // TableState

    const validatePageNumber = (pageNumber: number, maxPageNumber: number) => {
        if (pageNumber <= maxPageNumber && pageNumber >= 0) {
            props.gotoPage(pageNumber);
        }
    };
    return (
        <div className="leaderboard-info">
            <span className="page-number-nav">
                <button
                    className="first-page"
                    onClick={() => props.gotoPage(0)}
                    disabled={!props.canPreviousPage}
                >
                    {"<<"}
                </button>
                <button
                    className="previous-page"
                    onClick={() => props.previousPage()}
                    disabled={!props.canPreviousPage}
                >
                    Previous
                </button>
            </span>

            <div className="page-info">
                <span className="page-number-input-container">
                    <label className="page-label">Page</label>
                    <input
                        className="page-number-input"
                        defaultValue={props.pageIndex + 1}
                        max={props.pageOptions.length}
                        min="1"
                        onChange={(e) => {
                            validatePageNumber(
                                Number(e.target.value) - 1,
                                props.pageOptions.length
                            );
                        }}
                        type="number"
                    />
                </span>

                <span className="page-number-container">
                    Page{" "}
                    <strong className="page-number">{pageIndex + 1}</strong> -
                    <strong className="page-number">
                        {" "}
                        {props.pageOptions.length}
                    </strong>
                </span>

                <select
                    className="show-page-size"
                    value={pageSize}
                    onChange={(e) => props.setPageSize(Number(e.target.value))}
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
                    onClick={() => props.nextPage()}
                    disabled={!props.canNextPage}
                >
                    Next
                </button>
                <button
                    className="last-page"
                    onClick={() => props.gotoPage(props.pageCount - 1)}
                    disabled={!props.canNextPage}
                >
                    {">>"}
                </button>
            </span>
        </div>
    );
};
