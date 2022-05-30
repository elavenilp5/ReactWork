import React, { useMemo, useState } from "react";
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
import Modal from "react-modal";
import { Checkbox } from "./Checkbox";
export default function DraftTable() {
  const [header, setheader] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function myfunction(row) {
    setheader(row.original.Name);
    console.log(row);
    setModalIsOpen(true);
  }
  let count = 0;
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
            prepareRow(row);
            count = count + 1;
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td>
                  <a
                    style={{
                      cursor: "pointer",
                      color: "blue",
                    }}
                    onClick={() => myfunction(row)}
                  >
                    Edit
                  </a>
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4 style={{ float: "left" }}>
        Showing 1 to {count} of {count} entries
      </h4>
      <DraftFooter />
      {/* <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
      </pre> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {},
          content: {
            top: "20%",
            bottom: "20%",
            right: "30%",
            left: "30%",
            minHeight: "200px",
            Width: "650px",
            position: "absolute",
          },
        }}
      >
        <div className="edit">
          <div className="editheader">{header}</div>
          <div className="editbody">
            <div className="processdiv">
              <h5 className="bold">Process Type:</h5>
              <select
                name="process_type"
                style={{
                  width: "100%",
                  borderRadius: "3px",
                  border: "1px solid #404245",
                  color: "#000",
                  fontSize: "12px",
                  fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif;",
                  height: "30px",
                  padding: "5px",
                }}
                className="process_select"
              >
                <option>Leadership Process</option>
                <option>LEADERSHIPCORE Process</option>
                <option>Core Process</option>
                <option>VMODEL</option>
                <option>LEADVMODEL</option>
                <option>Support Process</option>
              </select>
            </div>
            <div className="domaindiv">
              <h5 className="bold">Domain Mapping:</h5>
              <select
                name="domain_mapping"
                style={{
                  width: "100%",
                  borderRadius: "3px",
                  border: "1px solid #404245",
                  color: "#000",
                  fontSize: "12px",
                  fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif;",
                  height: "30px",
                  padding: "5px",
                }}
                className="domain_select"
              >
                <option>NONE</option>
                <option>Acquisition_Process</option>
                <option>AE/TEF</option>
                <option>Business Unit Knowledge Base</option>
                <option>Component PCB Connection</option>
                <option>Configuration Management</option>
              </select>
            </div>
            <h5 className="bold topspace">Release Notes</h5>
            <div className="releasediv">
              <div className="filediv">
                <input type="file" name="file" className="fileinput" />
              </div>
              <button className="button_edit">Upload</button>
            </div>
            <span style={{ color: "#808080", fontSize: "10px" }}>
              (Note:'save' operation is not required to upload a release
              note.Simple browse a file and click on upload)
            </span>
            <h5 className="bold topspace">Image</h5>
            <div className="imagediv">
              <div className="filediv">
                <input type="file" name="file" className="fileinput" />
              </div>
              <button className="button_edit">Upload</button>
            </div>
            <span style={{ color: "#808080", fontSize: "10px" }}>
              (Note:'save' operation is not required to upload a image.Simple
              browse a file and click on upload)
            </span>
          </div>

          <div className="editfooter">
            <button
              className="e1 button_edit"
              onClick={() => setModalIsOpen(false)}
            >
              Close
            </button>
            <button className="e2 button_edit">Save</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
