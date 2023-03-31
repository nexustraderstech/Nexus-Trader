import React from "react";
import "./meetTeam.scss";

const instagram = "./assets/images/instagram.png";
const linkedin = "./assets/images/linkedin.png";

const MeetTeam = (props) => {
  return (
    <div className="Mttcard">
      <div className="MttImg" style={{ order: props.Img_Order }}>
        <img src={props.img}  alt="" />
      </div>

      <div className="MttInfo" style={{ order: props.Info_Order }}>
        <h3>
          {props.cap1}
          <span className="small_text">{props.smtxt1} </span>
          {props.cap2}
          <span className="small_text">{props.smtxt2} </span>
        </h3>
        <p className="subTitle">{props.subtitle}</p>
        <p className="text">{props.text}</p>
        <div className="icon_grp">
          <a href={props.instagram} target="_blank" rel="noreferrer"> <img src={instagram} alt="instagram" /> </a>
          <a href={props.linkedin} target="_blank" rel="noreferrer"> <img src={linkedin} alt="linkedin" /> </a>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
