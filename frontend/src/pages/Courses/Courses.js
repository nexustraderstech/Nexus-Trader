import React from 'react';
import './courses.scss';
import { CoursesData } from '../../data/CoursesData';
import CoursesCard from '../../components/Course Card/CourseCard';
import PreRegistration from '../../components/PreRegistration/PreRegistration';
import axios from 'axios';
const sample_img = './assets/images/sample_image_1.png';

const Courses = () => {
  const getAmount = (amt) => {
    console.log(amt);
    return amt;
  };

  return (
    <div className='courses_container'>
      <div className='header'>
        <img src={sample_img} alt='img' />

        <div className='subDiv'>
          <div className='content'>
            <h1>PREMINUM COURSES</h1>
            <p>
              A complete course designed specifically for you to learn to trade
              and investing in the Stock Market. At the end of the course, you
              will be able to trade daily and make profits in real-time.
            </p>
          </div>
        </div>
      </div>

      <PreRegistration />

      <div className='courses'>
        {CoursesData.map((course, index) => {
          return (
            <CoursesCard
              key={index}
              video={course.video}
              duration={course.duration}
              old_online={course.old_online}
              new_online={course.new_online}
              old_offline={course.old_offline}
              new_offline={course.new_offline}
              content={course.content}
              path={course.path}
              getAmount={getAmount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
