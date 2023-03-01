import React from "react";
import "./pageNotFound.scss";

const pnf = "./assets/images/pnf.png";

const PageNotFound = () => {
  return (
    <div className="pnf_container">
      <div className="img_wrapper">
        <img src={pnf} alt="" />
      </div>
    </div>
  );
};

export default PageNotFound;
