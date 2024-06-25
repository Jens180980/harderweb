import { useState } from "react";
import Modal from "../Modal/Modal";
import data from "../../Data/work.json";
import "./Gallery.css";

function Gallery() {
  const [clickedImg, setClickedImg] = useState(null);
  const [caseDescrip, setCaseDescrip] = useState("");
  const [link, setLink] = useState("");

  const handleClick = (item) => {
    setClickedImg(item.img);
    setCaseDescrip(item.content);
    setLink(item.link);
  };

  return (
    <div className="gallery-wrapper">
      {data.work.map((item, index) => (
        <div className="gallery-item" key={index}>
          <img
            src={item.img}
            alt={item.title}
            onClick={() => handleClick(item)}
          />
        </div>
      ))}
      <div className="modal-wrapper">
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            setClickedImg={setClickedImg}
            caseDescrip={caseDescrip}
            link={link}
          />
        )}
      </div>
    </div>
  );
}

export default Gallery;
