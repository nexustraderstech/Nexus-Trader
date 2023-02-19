import React from 'react';
import './meetTeam.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MeetTeam = ({
  img,
  Aorder,
  cap1,
  cap2,
  smtxt1,
  smtxt2,
  subtitle,
  text,
}) => {
  return (
    <div className='Mttcard'>
      <img src={img} style={{ order: Aorder }} alt='' />

      <div className='MttInfo'>
        <h3>
          {cap1}
          <span className='small_text'>{smtxt1} </span>
          {cap2}
          <span className='small_text'>{smtxt2} </span>
        </h3>
        <p className='subTitle'>{subtitle}</p>
        <p className='text'>{text}</p>
        <div className='icon-grp'>
          <span className='icon'>
            <InstagramIcon />
          </span>
          <span className='icon'>
            <LinkedInIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
