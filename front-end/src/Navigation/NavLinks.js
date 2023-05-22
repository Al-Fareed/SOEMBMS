import React from "react";
import "./NavLinks.css";
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>HOME</NavLink>
      </li>
      <li>
        <NavLink to="/About">ABOUT</NavLink>
      </li>
      <li>
        <NavLink to="/Contact">CONTACT</NavLink>
      </li>
      <li>
        <NavLink to="/Logout">LOGOUT</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
