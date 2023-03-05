import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./homeReviewSlider.scss";

// import required modules
import { Autoplay, Pagination } from "swiper";

import ReviewCard from "../../ReviewCard/ReviewCard";
import ReviewData from "../../../data/ReviewData";

export default function HomeReviewSlider() {

  return (
    <div className="review_container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {ReviewData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ReviewCard name={item.name} starsCount={item.stars} content={item.content} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
