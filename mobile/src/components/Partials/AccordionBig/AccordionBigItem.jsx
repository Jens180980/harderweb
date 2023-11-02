import { NavLink } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
import "./AccordionBig.css";

export const AccordionBigItem = ({ title, content, logo }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <IconContext.Provider value={{ size: "2.5em", color: "#07c803" }}>
      <div className="accordion-big-item" onClick={() => setIsOpen(!isOpen)}>
        <Icon nameIcon={logo} />
        <h2>{title}</h2>
        <NavLink className={isOpen ? "accordionNavlink" : "linkShows"}>
          {content}
        </NavLink>
      </div>
    </IconContext.Provider>
  );
};
