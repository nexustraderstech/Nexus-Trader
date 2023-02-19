import React from "react";
import "./courseCard.scss";

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
            {content.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className="sub_btn">
          <a href={path} target="_blank">
            <button>Join Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
