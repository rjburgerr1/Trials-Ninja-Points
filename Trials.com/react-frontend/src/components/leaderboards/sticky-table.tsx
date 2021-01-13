import React, { useEffect, useMemo, useState } from "react";
import { useTable, useBlockLayout, Column } from "react-table";
import { useSticky } from "react-table-sticky";
import { Styles } from "./TableStyles";

import { COLUMNS } from "./main-leaderboard-columns";
import "./table.css";
import getData from "../data";

const resolveData = async (setData: any) => {
  try {
    const data = await getData();

    setData(data);
  } catch (err) {
    console.error(err.message);
  }
};
export const StickyTable = () => {
  const columns: Array<Column> = useMemo(() => COLUMNS, []);
  let [data, setData] = useState([{}]);

  useEffect(() => {
    resolveData(setData);
  }, []); // includes empty dependency array

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useBlockLayout,
    useSticky
  );
  const firstPageRows = rows.slice(0, 50);

  return (
    <Styles>
      <div
        {...getTableProps()}
        className="table sticky"
        style={{ borderWidth: 0, height: 500 }}
      >
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render("Header")}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render("Cell")}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
  );
};
