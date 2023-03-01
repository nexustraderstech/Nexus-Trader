import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./homeReviewSlider.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import ReviewCard from "../../ReviewCard/ReviewCard";
import ReviewData from "../../../data/ReviewData";

export default function HomeReviewSlider() {
  const [navigationEnabled, setNavigationEnabled] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 480) {
        setNavigationEnabled(false);
      } else {
        setNavigationEnabled(true);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        navigation={navigationEnabled}
        modules={[Autoplay, Pagination, Navigation]}
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
