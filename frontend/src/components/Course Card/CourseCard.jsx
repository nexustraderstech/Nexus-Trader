import React from 'react';
import './courseCard.scss';
import { useNavigate } from 'react-router-dom';

const CoursesCard = ({
  video,
  duration,
  new_online,
  new_offline,
  old_offline,
  old_online,
  content,
  path,
  getAmount,
  CheckOutHandler,
}) => {
  const handleButton = () => {
    // getAmount(new_online);
    CheckOutHandler(getAmount(5000));
  };
  const navigate = useNavigate();
  return (
    <div className='coursesCard_container'>
      <div className='col_1'>
        <video src={video} controls={false} autoPlay loop muted></video>
      </div>

      <div className='col_2'>
        <div className='content'>
          <div className='detail'>
            <b>Duration : </b> {duration} <br />
            {new_online !== '₹.0' ? (
              <>
                <b>Online : </b> <span className='old'>{old_online}</span>{' '}
                {new_online} <br />
              </>
            ) : null}
            {new_offline !== '₹.0' ? (
              <>
                <b>Offline : </b> <span className='old'>{old_offline}</span> ₹.{' '}
                {new_offline}/- <br />
              </>
            ) : null}
          </div>

          <div className='syllabus'>
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='sub_btn'>
            <a href={path} target='_blank' rel='noreferrer'>
              <button onClick={() => navigate('/pay')}>Enroll Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
