import React, { useEffect } from 'react';
import './home.scss';
// import { selectUser } from '../../app/reducers/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../../components/Home Cards/Card';
import Demat from '../../components/Demat/Demat';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CourseSlider from '../../components/CourseSwiperSlider/CourseSwiperSlider';
import TestoSlider from '../../components/TestimonialsSwiperSlider/TestiSwiperSlider';

const logo_with_signature = './assets/images/logo_with_signature.png';
const sujoy_hitesh_2 = './assets/images/sujoy_hitesh_2.jpg';
const smaple_vid = './assets/videos/sample_vid_2.mp4';

const Home = () => {
  const card_data = [
    {
      id: 1,
      img: './assets/images/vector_art_1.png',
      title: 'Live And Interactive Sessions',
      content:
        'We conduct classes in a fun way, with real life examples so that students can understand all the concepts in the simplest way possible.',
    },
    {
      id: 2,
      img: './assets/images/vector_art_2.png',
      title: 'Doubt Sessions',
      content: 'A friendly atmosphere so you can easily ask your doubts.',
    },
    {
      id: 3,
      img: './assets/images/vector_art_3.png',
      title: 'Team Support',
      content:
        'Young and hardworking mentors who are always available to help you, dedicated team to help you throughout the process.',
    },
    {
      id: 3,
      img: './assets/images/vector_art_4.png',
      title: 'Analysis',
      content:
        'Regular market updates and analysis for the best stock picks, support for 6 months even after the course ends.',
    },
  ];

  const stats_data = [
    // {
    //   id: 1,
    //   number: "420+",
    //   title: "Number of Live Lessons",
    // },
    {
      id: 1,
      number: '14+',
      title: 'Number of Batches',
    },
    {
      id: 2,
      number: '200+',
      title: 'Number of Students',
    },
    {
      id: 3,
      number: '500+',
      title: 'Hours of Teaching',
    },
  ];

  return (
    <div className='container_home'>
      {/*header*/}

      <div className='home_header'>
        <div className='subDiv_1'>
          <h1>NEXUS TRADERS</h1>
          <h2>Turning Wealth Into Empire</h2>

          <p>
            We at Nexustraders provide you with all the elements required to
            become an elite trader and investor in the stock market in the most
            simple methods, personally backtested by us.
          </p>
          <Link to='/courses'>
            <button className='btn'>Enroll Now</button>
          </Link>
        </div>

        <div className='subDiv_2'>
          <div className='col_1'>
            <img src={logo_with_signature} alt='logo 2' />
          </div>

          <div className='col_2'>
            {card_data.map((item, index) => (
              <Card
                key={index}
                img={item.img}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>

      {/*courses*/}

      <div className='home_courses'>
        <div className='col_1'>
          <h2>Courses</h2>
          <p>
            A complete course designed specifically for you to attain the
            Financial Goals and Status you ever dreamed of! Invest this time in
            yourself, learn trading and investing in the Stock Market, and
            become financially free. At the end of the course, you will be able
            to trade daily and make profits in real-time.
          </p>
          <Link to='/courses'>
            <button className='button'>Enroll Now</button>
          </Link>
        </div>

        <div className='col_2'>
          <div className='slider'>
            <CourseSlider />
          </div>
        </div>
      </div>

      {/*open Demat account*/}

      <Demat />

      {/*testimonials*/}

      <div className='home_testi'>
        <h2>Testimonials</h2>
        <div className='slider'>
          <TestoSlider />
        </div>
      </div>

      {/*stats*/}
      <div className='home_stats'>
        <div className='top'>
          <h2>
            We Take Pride In Our <br />
            Number
          </h2>
        </div>
        <div className='bottom'>
          {stats_data.map((item, index) => (
            <div key={index} className='item'>
              <h3>{item.number}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/*Visions*/}

      <div className='home_visions'>
        <div className='col_1'>
          <video
            src={smaple_vid}
            controls={false}
            autoPlay
            loop
            muted
            width={'60%'}
          ></video>
          <p>
            A Few Months Of Learning <br />{' '}
            <span style={{ color: '#daa520' }}> How To Trade </span> <br /> Can
            Produce A Lifetime Of Freedom
          </p>
        </div>
        <div className='col_2'>
          <h2>Vision</h2>
          <p>
            We aim to popularize the concepts of stock trading and investing to
            enable the youth to benefit from them. Our Premium courses will be
            really helpful to those who want to learn about the stock markets
            and create a passive source of income through it.
          </p>
        </div>
      </div>

      {/*Blogs*/}
      {/*
      <div className='home_blogs'>
        <h1>BLogs</h1>
        <BlogSwiper />
      </div>
      */}

      {/*About Us*/}
      <div className='home_about'>
        <div className='col_1'>
          <h2>
            Mst. Hitesh Gadling & <br /> Mst. Sujoy Bhattacharya
          </h2>
          <h3>Founders of Nexus Traders.</h3>
          <p>
            Professional Traders and Investors in the Stock Market for the past
            2 years. They have successfully trained more than 100 students And
            the aim is to popularize the concept of stock trading & investing to
            enable the youth to benefit from it.
          </p>
          <Link to='/about'>
            <button>
              To Know More
              <ArrowForwardIosIcon
                style={{
                  backgroundColor: 'transparent',
                  fontSize: '1rem',
                  color: '#daa520',
                }}
              />
            </button>
          </Link>
        </div>
        <div className='col_2'>
          <img src={sujoy_hitesh_2} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Home;
