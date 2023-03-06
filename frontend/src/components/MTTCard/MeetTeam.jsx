import React from "react";
import "./meetTeam.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const MeetTeam = (props) => {
  return (
    <div className="Mttcard">
      <img src={props.img} style={{ order: props.Aorder }} alt="" />

      <div className="MttInfo">
        <h3>
          {props.cap1}
          <span className="small_text">{props.smtxt1} </span>
          {props.cap2}
          <span className="small_text">{props.smtxt2} </span>
        </h3>
        <p className="subTitle">{props.subtitle}</p>
        <p className="text">{props.text}</p>
        <div className="icon-grp">
          <span className="icon">
            <a href={props.instagram} target="_blank" rel="noreferrer"> <InstagramIcon /> </a>
          </span>
          <span className="icon">
          <a href={props.linkedin} target="_blank" rel="noreferrer"> <LinkedInIcon /> </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
