import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./testiSwiperSlider.scss";

// import required modules
import { EffectCoverflow, Autoplay, Pagination } from "swiper";

import { TestimonialData } from "../../data/TestimonialData";

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
        modules={[EffectCoverflow, Autoplay, Pagination]}
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
