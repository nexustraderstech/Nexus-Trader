import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./courseSwiperSlider.scss";

// import required modules
import { Autoplay, Pagination } from "swiper";

import { Link } from "react-router-dom";

// import platinum_course from "./assets/videos/platinum_course_vid.mp4";

const platinum_course = "./assets/videos/platinum_course_vid.mp4";
const advanced_course = "./assets/videos/advanced_course_vid.mp4";

export default function App() {
  return (
    <div className="courseSlider">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
      <SwiperSlide>
          <Link to="/courses">
            <video
              src={platinum_course}
              controls={false}
              autoPlay
              loop
              muted
            ></video>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/courses">
            <video
              src={advanced_course}
              controls={false}
              autoPlay
              loop
              muted
            ></video>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
