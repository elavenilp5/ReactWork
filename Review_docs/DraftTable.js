import React, { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  useRowSelect,
} from "react-table";
import WorkingDraft from "./WorkingDraft.json";
import { COLUMNS } from "./columns";
import Searchbar from "./Searchbar";
import DraftFooter from "./DraftFooter";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Checkbox } from "./Checkbox";
export default function DraftTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => WorkingDraft, []);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    useRowSelect
    // (hooks) => {
    //   hooks.visibleColumns.push((columns) => {
    //     return [
    //       {
    //         id: "selection",
    //         Header: ({ getToggleAllRowsSelectedProps }) => (
    //           <Checkbox {...getToggleAllRowsSelectedProps()} />
    //         ),
    //         cell: ({ row }) => (
    //           <Checkbox {...row.getToggleRowSelectedProps()} />
    //         ),
    //       },
    //       ...columns,
    //     ];
    //   });
    // }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = tableInstance;

  const { globalFilter } = state;
  return (
    <div className="tablediv">
      <Searchbar filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDropDownIcon />
                      ) : (
                        <ArrowDropUpIcon />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
              <th></th>
              <th>
                <input type="checkbox" />
              </th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td>
                  <a style={{ cursor: "pointer", color: "blue" }}>Edit</a>
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4 style={{ float: "left" }}>Showing 1 to 10 of 10 entries</h4>
      <DraftFooter />
    </div>
  );
}
