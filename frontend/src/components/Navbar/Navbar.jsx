import React, { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const logo = "./assets/images/logo.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const toggler = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={isNavOpen ? "nav" : "nav_expand"}>
      <div className="left">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="right">
          <NavLink to="/" className="menu">
            Home
          </NavLink>
          <NavLink to="/about" className="menu">
            About Us
          </NavLink>
          <NavLink to="/courses" className="menu">
            Courses
          </NavLink>
          <NavLink to="/testimonials" className="menu">
            Testimonials
          </NavLink>
          <NavLink to="/reviews" className="menu">
            Reviews
          </NavLink>
          <NavLink to="/workshops" className="menu">
            Workshops
          </NavLink>
        <button className="menu">
          <b>Join Now</b>
        </button>
      </div>

      <div className="btn_toggle" onClick={toggler}>
        {isNavOpen ? <MenuIcon /> : <CloseIcon />}
      </div>
    </div>
  );
};

export default Navbar;
