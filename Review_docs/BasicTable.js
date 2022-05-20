import React, { useMemo } from "react";
import { useTable } from "react-table";
import Baselines from "./Baselines.json";
import { COLUMNS } from "./columns";


export default function BasicTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Baselines, []);
  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div className="tablediv">
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
              <td>Edit</td>
              <td> <input type="checkbox" /></td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}
