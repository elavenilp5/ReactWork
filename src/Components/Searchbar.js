import React from "react"

function Searchbar({ filter, setFilter }) {
  return (
    <div className="searchbardiv">
      <label for="search">Search: &nbsp;</label>

      <input
        data-testid="searchbox"
        placeholder="search"
        type="text"
        id="serach"
        name="search"
        value={filter || " "}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  )
}

export default Searchbar
