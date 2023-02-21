import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.scss';
import { Autoplay, Pagination } from 'swiper';
import BlogCard from './../blogs/BlogCard';
const BlogSwiper = () => {
  return (
    <div className='BlogSwiper_container'>
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
        className='blogSwiper'
      >
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogSwiper;
