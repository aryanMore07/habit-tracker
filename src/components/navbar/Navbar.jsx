import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-div'>
        <ul className='ul-lists'>
            <NavLink to='/' className='nav-links'><li>Home</li></NavLink>
            <NavLink to='/archive' className='nav-links'><li>Archives</li></NavLink>
            <NavLink to='/bin' className='nav-links'><li>Bin</li></NavLink>
        </ul>
    </div>
  )
}

export default Navbar
