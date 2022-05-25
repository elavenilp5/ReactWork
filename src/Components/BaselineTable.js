import React, { useMemo, useState } from "react"
import { useTable, useGlobalFilter, useSortBy } from "react-table"
import Baselines from "./Baselines.json"
import { COLUMNS } from "./columns"
import Searchbar from "./Searchbar"
import BaselineFooter from "./BaselineFooter"

export default function BaselineTable() {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => Baselines, [])
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance

  const { globalFilter } = state
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
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
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
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                })}
                <td>
                  <a style={{ cursor: "pointer", color: "blue" }}>Edit</a>
                </td>
                <td>
                  <input
                    type="checkbox"
                    disabled={true}
                    style={{ cursor: "not-allowed" }}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <h4 style={{ float: "left" }}>Showing 1 to 10 of 10 entries</h4>
      <BaselineFooter />
    </div>
  )
}
