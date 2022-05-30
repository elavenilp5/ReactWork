import React, { useState, useEffect } from "react";
import Modal from "react-modal";
function BaselineFooter() {
  const [loading, setLoading] = useState(false);

  function refreshPage() {
    setLoading(true);
    window.location.reload(false);
  }
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="footer">
      <button type="button" className="b1 button" onClick={refreshPage}>
        Refresh
      </button>
      <button
        type="button"
        className="b2 button"
        onClick={() => setModalIsOpen(true)}
      >
        Generate Process Data
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {},
          content: {
            width: "300px",
            height: "250px",
            left: "622.5px",
            top: "371px",
            display: "block",
            background: "#eeeeee",
            border: "1px solid #dddddd",
          },
        }}
      >
        <div className="footer_dialogbox">
          <div className="dialog_title">Alert</div>
          <div className="dailog_content">
            <p>Please select atleast one release to proceed</p>
          </div>
          <div className="dialog_footer">
            <hr style={{ color: "#eeeeee" }}></hr>
            <button
              className="generate_button"
              style={{
                border: "1px solid #cccccc",
                background: "#f6f6f6",
                fontWeight: "bold",
                color: "#1C94C4",
                float: "right",
                fontSize: "1em",
                cursor: "pointer",
                margin: ".5em .4em .5em 0",
              }}
              onClick={() => setModalIsOpen(false)}
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
      <button type="button" className="b3 button">
        Archive Process
      </button>
    </div>
  );
}

export default BaselineFooter;
