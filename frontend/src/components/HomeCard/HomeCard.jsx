import React from 'react'
import "./homeCard.scss"

const Card = ({img, title, content}) => {
  return (
    <div className="card_container">
        <img src={img} alt="img" className='card_img'/>
        <p className='card_title'>{title}</p>
        <p className='card_content'>{content}</p>
    </div>
  )
}

export default Card