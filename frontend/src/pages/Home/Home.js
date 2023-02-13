import React from 'react';
import "./home.scss";
import Card from "../../components/Home Cards/Card"

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
                  id={index}
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
          
        </div>
      </div>

      {/*open Demat account*/}
      {/*testimonials*/}
      {/*Our Partners*/}
      {/*Visions*/}
      {/*Blogs*/}
      {/*About Us*/}

    </div>
  )
}

export default Home