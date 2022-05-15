import React from "react"

function Searchbar() {
  return (
    <div className="searchbardiv">
      <label for="search">Search: &nbsp;</label>

      <input type="text" id="serach" name="search" />
    </div>
  )
}

export default Searchbar
