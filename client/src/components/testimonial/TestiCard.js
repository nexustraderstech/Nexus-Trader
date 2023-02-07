import React from 'react';
import './testiCard.css';
const TestiCard = ({ image, title, content }) => {
  return (
    <>
      <div className='testimonial-card'>
        <img src={image} alt='test Images' />
        <h5 className='test-card-title'>{title}</h5>
        <p className='test-card-para'>{content}</p>
      </div>
    </>
  );
};

export default TestiCard;
