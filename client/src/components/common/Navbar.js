import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const toggler = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div>
      <div className={isNavOpen ? 'nav' : 'nav expand'}>
        <div className='logo'>
          <img src='assets/images/logo.png' alt='logo' />
        </div>
        <ul className='navList'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/courses'>Courses</NavLink>
          </li>
          <li>
            <NavLink to='/blog'>Blog</NavLink>
          </li>
          <li>
            <NavLink to='/testomonial'>Testomonial</NavLink>
          </li>
        </ul>
        <button className='btn-joinNow'>Join Now</button>

        <div className='btn-toggle' onClick={toggler}>
          {isNavOpen ? <MenuIcon /> : <CloseIcon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
