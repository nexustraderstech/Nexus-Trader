import React from 'react';
import './testimonial.scss';
import TestiCard from './../../components/TestimonialCard/TestiCard';
import { TestimonialData } from './TestimonialsData';

const Testimonial = () => {
  return (
    <div className='test_container'>

      <h1>T<span className='small_text'>ESTIMONIALS</span></h1>

      <div className='test_grid'>
        {
          TestimonialData.map((item, index) => (
            <TestiCard
              key={index}
              image={item.image}
              title={item.name}
              content={item.content}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Testimonial;
