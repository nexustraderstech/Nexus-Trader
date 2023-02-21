import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.scss';

// import required modules
import { Autoplay, Pagination } from 'swiper';

const CoursesSlider = ({ data }) => {
  return (
    <div className='coursesSwiper_container'>
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
        className='courseSwiper'
      >
        {data.map((item, index) => {
          return item.card_data.map((item_2, index) => {
            return (
              <SwiperSlide className='courses'>
                <div className='swiper_slide'>
                  <img src={item_2.img} alt={item_2.title} />
                </div>
              </SwiperSlide>
            );
          });
        })}
      </Swiper>
    </div>
  );
};

export default CoursesSlider;
