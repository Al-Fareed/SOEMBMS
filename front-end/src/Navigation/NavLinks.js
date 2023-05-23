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
        <NavLink to="/Sell">SELL</NavLink>
      </li>
      <li>
        <NavLink to="/Buy">BUY</NavLink>
      </li>
      <li>
        <NavLink to="/Logout">LOGOUT</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
