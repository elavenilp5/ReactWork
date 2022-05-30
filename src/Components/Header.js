import React from "react"
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"
export default function Header() {
  return (
    <div className="headerdiv" data-testid="head">
      <div className="logodiv">
        <img src="Bosch_logo.jpg" alt="logo" className="logoimg" />
      </div>
      <div className="nav">
        <KeyboardDoubleArrowDownIcon
          sx={{
            fontSize: "60px",
            color: "white",
            ml: 20,
          }}
        />
      </div>

      <div className="screenHead">
        <h4 className="head" style={{ color: "white" }}>
          View Standard Processes
        </h4>
      </div>
    </div>
  )
}
