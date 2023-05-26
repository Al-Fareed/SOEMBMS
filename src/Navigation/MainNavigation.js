import React from "react";
import "./MainNavigation.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
const MainHeader = (props) => {
  return (
    <header className="main-header">
      <div className="head">
        <h2>Electricity Billing and Management</h2>
      </div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li>
            <NavLink to="/" exact>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/Sell" exact>
              SELL
            </NavLink>
          </li>
          <li>
            <NavLink to="/Buy" exact>
              BUY
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" exact>
              LOGIN
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="dropdown mob-nav">
        <button class="dropbtn">
          <i className="fa-sharp fa-solid fa-bars"></i>
        </button>
        <div className="dropdown-content">
          <li><NavLink to="/" exact>HOME</NavLink></li>
          <li><NavLink to="/Sell" exact>SELL</NavLink></li>
          <li><NavLink to="/Buy" exact>BUY</NavLink></li>
          <li><NavLink to="/login" exact>LOGIN</NavLink></li>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
