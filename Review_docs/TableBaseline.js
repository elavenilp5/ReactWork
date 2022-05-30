import React from "react"
import JsonData from "./Baselines.json"
import Searchbar from "./Searchbar"
import "../App.css"
import BaselineFooter from "./BaselineFooter"
function TableBaseline() {
  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        <td>{info.ID}</td>
        <td>{info.Name}</td>
        <td>{info.Type}</td>
        <td>{info.Domain}</td>
        <td>{info.CreatedOn}</td>
        <td>{info.ReleasedOn}</td>
        <td>{info.Userview}</td>
        <td>
          <a style={{ cursor: "pointer", color: "blue" }}>Edit</a>
        </td>
        <td>
          <input type="checkbox" />
        </td>
      </tr>
    )
  })

  return (
    <div className="tablediv">
      <Searchbar />

      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Domain</th>
            <th>CreatedOn</th>
            <th>ReleasedOn</th>
            <th>Userview</th>
            <th></th>
            <th>
              <input type="checkbox" />
            </th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
      <BaselineFooter />
    </div>
  )
}

export default TableBaseline
