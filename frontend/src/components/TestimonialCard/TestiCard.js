import React from 'react';
import './testiCard.scss';
const TestiCard = ({ image, title, content }) => {
  return (
    <div className='testimonial_card'>
      <img src={image} alt='test Images' className={title} />
      <h5 className='test_card_title'>{title}</h5>
      <p className='test_card_para'>{content}</p>
    </div>
  );
};

export default TestiCard;
