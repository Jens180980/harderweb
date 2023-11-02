import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <NavLink to="/meet" className="footer-menu-item">
        Meet
      </NavLink>
      <NavLink to="/work" className="footer-menu-item">
        Work
      </NavLink>
      <NavLink to="/play" className="footer-menu-item">
        Play
      </NavLink>
      <NavLink to="/dream" className="footer-menu-item">
        Dream
      </NavLink>
    </div>
  );
};

export default Footer;
