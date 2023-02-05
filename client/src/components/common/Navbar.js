import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='nav'>
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
            <NavLink to='/courses'>Blog</NavLink>
          </li>
          <li>
            <NavLink to='/testomonial'>Testomonial</NavLink>
          </li>
        </ul>
        <button className='btn-joinNow'>Join Now</button>
      </div>
    </div>
  );
};

export default Navbar;
