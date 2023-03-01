import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./homeTestiSlider.scss";

// import required modules
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper";

import { TestimonialData } from "../../../pages/Testimonials/TestimonialData";

export default function HomeTestiSlider() {
  return (
    <div className="testiSlider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {
        TestimonialData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item.src} alt=" " />
            </SwiperSlide>
          );
        })
      }
      </Swiper>
    </div>
  );
}
