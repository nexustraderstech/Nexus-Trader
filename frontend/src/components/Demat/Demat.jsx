import React from "react";
import "./demat.scss";

const Demat = () => {
  return (
    <div className="demat">
      <div className="content">
        <h2>Open FREE Demat Account with Zerodha</h2>
        <a
          href="https://zerodha.com/?c=TZ4645&s=CONSOLE"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button"> Open an Account</button>
        </a>
        <div className="hr"></div>
      </div>
    </div>
  );
};

export default Demat;
