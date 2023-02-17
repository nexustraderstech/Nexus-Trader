import React from "react";
import "./courses.scss";

const sample_img = "./assets/images/sample_image_1.png";
const platinum_course = "./assets/images/platinum_course_vid.mp4";
const advanced_course = "./assets/images/advanced_course_vid.mp4";

const Courses = () => {
  return (
    <div className="courses_container">
      <div className="header">
        <img src={sample_img} alt="img" />
        <div className="subDiv">
          <div className="content">
            <h1>PREMINUM COURSES</h1>
            <p>
              A complete course designed specifically for you to learn to trade
              and investing in the Stock Market. At the end of the course, you
              will be able to trade daily and make profits in real-time.
            </p>
          </div>
        </div>
      </div>

      <div className="demat">
        <div className="content">
          <h1>OPEN FREE DEMAT ACCOUNT WITH IIFL</h1>
          <button className="button"> Open an Account</button>
          <div className="hr"></div>
        </div>
      </div>

      <div className="courses">
        <div className="platinum">
          <div className="col_1">
            <video
              src={platinum_course}
              controls={false}
              autoPlay
              loop
              muted
            ></video>
          </div>

          <div className="col_2">
            <div className="detail">
              <b>Duration : </b> 8 weeks <br />
              <b>Online : </b> ₹. 9,599/- <br />
              <b>Offline : </b> ₹. 17,000/- <br />
            </div>

            <div className="syllabus">
              <ul>
                <li>Consists of Beginners, Intermediate and Advanced Course</li>
                <li>FREE demat account opening</li>
                <li>Doubt sessions</li>
                <li>PDFs + Tips</li>
                <li>VIP CALLS for 1 month</li>
                <li>
                  6 months access to our Traders community Discord server.
                </li>
                <li>Lifetime access to Live market analysis sessions.</li>
                <li>Recordings of the sessions.</li>
                <li>Mentor's trade breakdown videos.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="advance">
          <div className="col_1">
            <video
              src={advanced_course}
              controls={false}
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div className="col_2">
            <div className="detail">
              <b>Duration : </b> 2 weeks <br />
              <b>Online : </b> ₹. 6,999/- <br />
              <b>Offline : </b> ₹. 12,000/- <br />
            </div>

            <div className="syllabus">
              <ul>
                <li>Future and Options</li>
                <li>Option Chain analysis</li>
                <li>Hedging strategies</li>
                <li>Scalping strategy</li>
                <li>Commodity market ( includes doubt session)</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
