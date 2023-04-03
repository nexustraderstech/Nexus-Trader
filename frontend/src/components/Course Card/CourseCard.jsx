import React from "react";
import "./courseCard.scss";

const CoursesCard = (props) => {
  return (
    <div className="coursesCard_container">
      <div className="col_1">
        <video src={props.video} controls={false} autoPlay loop muted></video>
      </div>

      <div className="col_2">
        <div className="content">
          <div className="detail">
            <b>Duration : </b> {props.duration} <br />
            {
              props.new_online !== "₹.0" ? (
                <>
                  <b>Online : </b> <span className="old">{props.old_online}</span> {props.new_online} <br />
                </>
              ) : null 
            }
            {
              props.new_offline !== "₹.0" ? (
                <>
                <b>Offline : </b> <span className="old">{props.old_offline}</span> {props.new_offline} <br />
                </>
              ) : null 
            }
          </div>

          <div className="syllabus">
            <ul>
              {props.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="sub_btn">
            <a href={props.path} target="_blank" rel="noreferrer">
              <button >Enroll Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
