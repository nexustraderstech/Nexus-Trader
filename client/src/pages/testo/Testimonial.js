import React from 'react';
import './testimonial.scss';
import TestiCard from './../../components/testimonial/TestiCard';
import { TestimonialData } from './TestimonialData';

const Testimonial = () => {
  return (
    <div className='test-container'>
      <div className='test-title'>Testimonial</div>
      <div className='test-grid'>
        {TestimonialData.map((item, index) => (
          <TestiCard
            key={index}
            image={item.image}
            title={item.name}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
