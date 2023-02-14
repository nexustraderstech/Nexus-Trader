import React from 'react';
import "./home.scss";
import Card from "../../components/Home Cards/Card";
// import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {

  const card_data = [
    {
      id: 1,
      img: "https://via.placeholder.com/50x50",
      title: "Live And Interactive Sessions",
      content: "We conduct classes in a fun way, with real life examples so that students can understand all the concepts in the simplest way possible."
    },
    {
      id: 2,
      img: "https://via.placeholder.com/50x50",
      title: "Doubt Sessions",
      content: "A friendly atmosphere so you can easily ask your doubts."
    },
    {
      id: 3,
      img: "https://via.placeholder.com/50x50",
      title: "Team Support",
      content: "Young and hardworking mentors who are always available to help you, dedicated team to help you throughout the process."
    },
    {
      id: 3,
      img: "https://via.placeholder.com/50x50",
      title: "Analysis",
      content: "Regular market updates and analysis for the best stock picks, support for 6 months even after the course ends."
    },
  ];

  return (
    <div className='container_home'>


      {/*header*/}

      <div className="home_header">
        
        <div className="blurred_background"></div>
        
        <div className="subDiv_1">
          <h1>NEXUS TRADERS</h1>
          <h2>Turning Wealth Into Empire</h2>
          <p>
            We at Nexustraders provide you with all <br/>
            the elements required to become an elite <br/>
            trader and investor in the stock market <br/>
            in the most simple methods, personally <br/>
            backtested by us.
          </p>
          <button className='button'>Enroll Now</button>

        </div>
        
        <div className="subDiv_2">
          
          <div className="col_1">
            <img src="./assets/images/logo_with_signature.png" alt="logo 2" />
          </div>
          
          <div className="col_2">
    
            {
              card_data.map((item, index)=>(
                <Card
                  key={index}
                  img={item.img}
                  title={item.title}
                  content={item.content}
                />
              ))
            }
          
          </div>
        </div>
      </div>

      {/*courses*/}

      <div className="home_courses">
        <div className="col_1">
          <h1>Courses</h1>
          <p>A complete course designed specifically for you to attain <br/>
          the Financial Goals and Status you ever dreamed of! <br/>
          Invest this time in yourself, learn trading and investing in <br/>
          the Stock Market, and become financially free. At the end of <br/>
          the course, you will be able to trade daily and make profits <br/>
          in real-time.</p>
          <button className='button'>Enroll Now</button>
        </div>
        
        <div className="col_2">
            {/*Using Swiper js*/}
        </div>
      </div>

      {/*open Demat account*/}

      <div className="demat">
          <div className="content">
            <h1>OPEN FREE DEMAT ACCOUNT WITH IIFL</h1>
            <button className="button"> Open an Account</button>
            <div className="hr"></div>
            </div>
      </div>

      {/*testimonials*/}
      
      <div className="testi">
        <h1>Testimonials</h1>
        {/*Using Swiper js*/}
      </div>

      {/*Our Partners*/}

      {/*Visions*/}

      <div className="home_visions">
            <div className="col_1">
              <p> A FEW MONTHS OF LEARNING HOW TO TRADE CAN PRODUCE A LIFETIME OF FREEDOM.</p>
            </div>
            <div className="col_2">
              <h1>VISION</h1>
              <p>
                We aim to popularize the concepts of stock trading and investing to enable the youth to benefit from them. Our Premium courses will be really helpful to those who want to learn about the stock markets and create a passive source of income through it.</p>
              <button>Get Started</button>
            </div>
      </div>
      
      {/*Blogs*/}
      <div className="home_blogs">
        <h1>BLogs</h1>
        {/*Using Swiper js*/}
      </div>
      
      {/*About Us*/}
      <div className="home_about">
          <div className="col_1">
              <h1>Mst. Hitesh Gadling & <br /> Mst. Sujoy Bhattacharya</h1>
              <h2>Founders of Nexus Traders.</h2>
              <p>Professional Traders and Investors in the Stock Market for the past 2 years. They have successfully trained more than 100 students And the aim is to popularize the concept of stock trading & investing to enable the youth to benefit from it. </p>
              <button>To Know More<ArrowForwardIosIcon style={{backgroundColor:"transparent", fontSize:"15px", color: "#daa520"}}/></button>
          </div>
          <div className="col_2">
            <img src="./assets/images/sujoy_hitesh_2.jpg" alt="" />
          </div>
      </div>

    </div>
  )
}

export default Home