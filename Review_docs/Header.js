import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
export default function Header() {
  return (
    <div className="headerdiv">
      <div className="logodiv">
        <img src="Bosch_logo.jpg" alt="logo" className="logoimg" />
      </div>
      <div className="nav">
        <img src="header_menu_arrow.svg" alt="navigation" className="navimg" />
      </div>

      <div className="screenHead">View Standard Processes</div>
    </div>
  );
}
