import React from "react";
import "./courseCard.scss";
import { Link } from "react-router-dom";

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
            <b>Online : </b> <span className="old">{props.old_online}</span> {props.new_online} <br />
            <b>Offline : </b> <span className="old">{props.old_offline}</span> {props.new_offline} <br />
          </div>

          <div className="syllabus">
            <ul>
              {props.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="sub_btn">
            <Link to={props.path_1}>
              <button className="btn_1">Enroll Now</button>
            </Link>
            <Link to={props.path_2}>
              <button className="btn_2">
                Get +20% discount on pre-registration of NEXT BATCH !!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
