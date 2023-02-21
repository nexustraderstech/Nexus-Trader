import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiperSlider.scss";

// import required modules
import { Autoplay, Pagination } from "swiper";

const SwiperSlider = ({ data }) => {

  return (


    <div className="swiper_container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {
        //   data.map((item, index) => {
        //     return(

        //     // courses
        //     item.data === "courses"
        //       ? item.card_data.map((item_2, index) => {
        //           return (
        //             <SwiperSlide className="courses">
        //               <div className="swiper_slide">
        //                 <img src={item_2.img} alt={item_2.title} />
        //               </div>
        //             </SwiperSlide>
        //           );
        //         })
        //       : item.data === "blogs"
        //   )})
          
          // data.card_data.map((item, index) => {
          //     return (
          //       <SwiperSlide key={index}>
          //         <div className="swiper_slide">
          //             <img src={item.img} alt={item.title} />
          //         </div>
          //       </SwiperSlide>
          //     );

          // })
        }
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
