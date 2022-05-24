import React, { useState } from "react"
import ReactLoading from "react-loading"
function DraftFooter() {
  const [loading, setLoading] = useState(false)
  function refreshPage() {
    setLoading(true)
    window.location.reload(false)
    return <ReactLoading type="balls" color="#0000FF" height={100} width={50} />
  }
  return (
    <div className="footer">
      <button type="button" className="b1 button" onClick={refreshPage}>
        Refresh
      </button>
      <button type="button" className="b2 button">
        Generate Process Data
      </button>
    </div>
  )
}

export default DraftFooter
