import React from "react";

function Searchbar({ filter, setFilter }) {
  return (
    <div className="searchbardiv">
      <label for="search">Search: &nbsp;</label>

      <input
        type="text"
        id="serach"
        name="search"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;
