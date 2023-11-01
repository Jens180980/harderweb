import { NavLink } from "react-router-dom";
import { SiGotomeeting } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
import "./AccordionBig.css";

export const AccordionBig = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="accordion-big-wrap">
      <IconContext.Provider value={{ size: "2.5em", color: "#07c803" }}>
        <div className="accordion-big-item" onClick={() => setIsOpen(!isOpen)}>
          <SiGotomeeting />
          <h2>MEET</h2>
          <NavLink className={isOpen ? "accordionNavlink" : "linkShows"}>
            Touch me to get to know me better as a person and a colleague
          </NavLink>
        </div>
      </IconContext.Provider>
    </section>
  );
};
