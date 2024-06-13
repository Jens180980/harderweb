import React from "react";

function Slide(props) {
  return (
    <div className="slide">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Slide;
