import React from "react";
import "./footer.scss";

const instagram = "./assets/images/instagram.png";
const youtube = "./assets/images/youtube.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="content">
        <h2>Contact Us</h2>
        <p>Contact Number: +91 7021286780 / +91 8451997063</p>
        <p>Email ID: nexustrader.in@gmail.com</p>
        <div className="icons">
          <a
            href="https://www.instagram.com/nexustradersofficial/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="text">
        © 2021 Nexus Traders. All rights Reserved | Developed by &nbsp;
        <a href="https://github.com/ShauryaChawan">Shaurya</a> &nbsp;&
        <a href="https://github.com/samcasmmm">&nbsp;Sameer</a>
      </div>
    </div>
  );
};

export default Footer;
