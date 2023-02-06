import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GrMenu, GrClose } from 'react-icons/gr';

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
            <NavLink to='/courses'>Blog</NavLink>
          </li>
          <li>
            <NavLink to='/testomonial'>Testomonial</NavLink>
          </li>
        </ul>
        <button className='btn-joinNow'>Join Now</button>

        <div className='btn-toggle' onClick={toggler}>
          <span>
            {isNavOpen ? (
              <GrMenu size={20} color='white' />
            ) : (
              <GrClose style={{ color: 'white' }} size={20} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
