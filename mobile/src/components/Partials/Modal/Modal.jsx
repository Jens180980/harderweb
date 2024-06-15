import React from "react";
import "./Modal.css";

function Modal({ clickedImg, setClickedImg, caseDescrip }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("close-modal")) {
      setClickedImg(null);
    }
  };
  return (
    <div className="modalwrapper close-modal" onClick={handleClick}>
      <span className="close-modal">X</span>
      <p>{caseDescrip}</p>
    </div>
  );
}

export default Modal;
