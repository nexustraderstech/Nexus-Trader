import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isActive, setIsActive] = useState(null);
  const toggler = () => {
    setIsNavOpen(!isNavOpen);
  };
  const navigate = useNavigate();
  const Links = [
    { name: 'Home', navLink: '/' },
    { name: 'About us', navLink: '/about' },
    { name: 'Courses', navLink: '/courses' },
    { name: 'Blog', navLink: '/blog' },
    { name: 'Testimonial', navLink: '/testimonial' },
  ];
  return (
    <div>
      <div className={isNavOpen ? 'nav' : 'nav expand'}>
        <div className='logo'>
          <img src='assets/images/logo.png' alt='logo' />
        </div>

        {/* Active Links */}
        <ul className='navList'>
          {Links.map((link, index) => (
            <li key={index} className={index === isActive ? 'active' : ''}>
              <NavLink to={link.navLink}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
        <button className='btn-joinNow' onClick={() => navigate('/login')}>
          Join Now
        </button>

        <div className='btn-toggle' onClick={toggler}>
          {isNavOpen ? <MenuIcon /> : <CloseIcon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
