import React from "react";
import "./courseCard.scss";
import { Link } from "react-router-dom";

const CoursesCard = ({ video, duration, online, offline, content, path }) => {
  return (
    <div className="coursesCard_container">
      <div className="col_1">
        <video src={video} controls={false} autoPlay loop muted></video>
      </div>

      <div className="col_2">
        <div className="detail">
          <b>Duration : </b> {duration} <br />
          <b>Online : </b> {online} <br />
          <b>Offline : </b> {offline} <br />
        </div>

        <div className="syllabus">
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="sub_btn">
          <Link to={path} >
            <button>Enroll Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
