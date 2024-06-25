import React from "react";
import "./Modal.css";

function Modal({ clickedImg, setClickedImg, caseDescrip, link }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("close-modal")) {
      setClickedImg(null);
    }
  };
  return (
    <div className="modalwrapper close-modal" onClick={handleClick}>
      <span className="close-modal">X</span>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={clickedImg} alt="frontpage" className="modal-img" />
      </a>
      <p>{caseDescrip}</p>
    </div>
  );
}

export default Modal;
