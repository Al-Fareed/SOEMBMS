import React from 'react'
import './NavLinks.css';
import { NavLink } from 'react-router-dom';
const NavLinks = (props) => {
  return (
    <ul className='nav-links'>
        <li>
            <NavLink to='/' exact>HOME</NavLink>
        </li>
        <li>
            <NavLink to='/Sell'exact>SELL</NavLink>
        </li>
        <li>
            <NavLink to='/Buy' exact>BUY</NavLink>
        </li>
        <li>
        <NavLink to='/logout' exact>LOG OUT</NavLink>
        </li> 
    </ul>
  );
}

export default NavLinks;
// This component is for Navigation links in header specifying the route 
// to be where the user must be taken which is exported from here and imported in MainNavigation component