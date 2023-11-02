import { NavLink } from "react-router-dom";
import "./UnderConstruction.css";

export const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <h2>This page is under construction</h2>
      <p>Please come back later for more content</p>
      <NavLink to={"/"} className="back-home">
        Touch me gently to go back to my front page
      </NavLink>
    </div>
  );
};
