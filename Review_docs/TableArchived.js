import React from "react";
import JsonData from "./Archived.json";
import "../App.css";
import Searchbar from "./Searchbar";
function TableArchived() {
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
      </tr>
    );
  });

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
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
      <div style={{ textAlign: "center" }}>No data available to display</div>
      <hr></hr>
      <h4 style={{ float: "left" }}>Showing 0 to 0 of 0 entries</h4>
    </div>
  );
}

export default TableArchived;
