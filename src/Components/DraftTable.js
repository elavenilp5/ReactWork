import React, { useMemo, useState } from "react"
import { useTable, useGlobalFilter, useSortBy, useRowSelect } from "react-table"
import WorkingDraft from "./WorkingDraft.json"
import { COLUMNS } from "./columns"
import Searchbar from "./Searchbar"
import DraftFooter from "./DraftFooter"
import Modal from "react-modal"
import { Checkbox } from "./Checkbox"
export default function DraftTable() {
  const [header, setheader] = useState("")
  const [modalIsOpen, setModalIsOpen] = useState(false)
  function myfunction(row) {
    setheader(row.original.Name)
    console.log(row)
    setModalIsOpen(true)
  }
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => WorkingDraft, [])
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          ...columns,
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
        ]
      })
    }
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = tableInstance

  const { globalFilter } = state
  return (
    <div className="tablediv" data-testid="tableDraft">
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
              {/* <th>
                <input type="checkbox" />
              </th> */}
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
                  <a
                    style={{ cursor: "pointer", color: "blue" }}
                    onClick={() => myfunction(row)}
                  >
                    Edit
                  </a>
                </td>
                {/* <td>
                  <input type="checkbox" />
                </td> */}
              </tr>
            )
          })}
        </tbody>
      </table>
      <h4 style={{ float: "left" }}>Showing 1 to 10 of 10 entries</h4>
      <DraftFooter />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {},
          content: {
            left: "20%",
            top: "20%",
            right: "20%",
            bottom: "20%",
            minHeight: "200px",
            minWidth: "650px",
            position: "absolute",
          },
        }}
      >
        <div className="edit">
          <div className="editheader">{header}</div>
          <div className="editbody">
            <h5>Process Type:</h5>
            <select name="process_type" className="process_select">
              <option>Leadership Process</option>
              <option>LEADERSHIPCORE Process</option>
              <option>Core Process</option>
              <option>VMODEL</option>
              <option>LEADVMODEL</option>
              <option>Support Process</option>
            </select>

            <h5>Domain Mapping:</h5>
            <select name="domain_mapping" className="domain_select">
              <option>NONE</option>
              <option>Acquisition_Process</option>
              <option>AE/TEF</option>
              <option>Business Unit Knowledge Base</option>
              <option>Component PCB Connection</option>
              <option>Configuration Management</option>
            </select>

            <h5>Release Notes</h5>
            <div>
              <input type="file" name="file" />
              <button>Upload</button>
            </div>

            <h5>Image</h5>
            <div>
              <input type="file" name="file" />
              <button>Upload</button>
            </div>
          </div>

          <div className="editfooter">
            <button onClick={() => setModalIsOpen(false)}>Close</button>
            <button>Save</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
