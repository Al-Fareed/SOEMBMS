import React from 'react';
import './NavLinks.css'
// import { NavLink } from 'react-router-dom/cjs/react-router-dom';
const NavLinks = () => {
  return (
    <ul className='nav-links'>
        <li>
            <a href='' >HOME</a>
        </li>
        <li>
            <a href='#'>ABOUT</a>
        </li>
        <li>
            <a href='#'>LOGOUT</a>
            
        </li>
    </ul>
  )
}

export default NavLinks