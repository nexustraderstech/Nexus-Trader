import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.scss';
import { Autoplay, Pagination } from 'swiper';
import { TestimonialData } from './../../pages/Testimonials/TestimonialsData';
import TestiCard from './../TestimonialCard/TestiCard';

const TestoSwiper = () => {
  return (
    <div className='TestoSwiper_container'>
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
        className='testoSwiper'
      >
        {TestimonialData.map((item, index) => (
          <SwiperSlide>
            <div className='swipeTestCard'>
              <div className='img_name'>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
              <p className='SwiperPara'>{item.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestoSwiper;
