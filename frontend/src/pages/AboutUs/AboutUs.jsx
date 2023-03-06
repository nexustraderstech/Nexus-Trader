import React from "react";
import { TeamData } from "../../data/TeamData";
import "./aboutUs.scss";
import MeetTeam from "./../../components/MTTCard/MeetTeam";

const sample_img_1 = "./assets/images/sample_image_1.png";
const sujoy_hitesh = "./assets/images/sujoy_hitesh_2.jpg";

const AboutUs = () => {
  return (
    <div className="about_container">
      <div className="header">
        <h1>
          A<span className="small_text">BOUT </span>U
          <span className="small_text">S</span>
        </h1>

        <p className="subTitle">Turning Wealth Into Empire</p>

        <p className="text">
          We at Nexustraders provide you with the best stock market course
          with all the elements required to become an elite trader and
          investor in the stock market in the most simplified way, personallynpm 
          back-tested by us.
        </p>
      </div>

      <div className="center_img">
        <img src={sample_img_1} alt="sample" />
      </div>

      <div className="meet_the_team">
        <h2>
          M<span className="small_text">EET </span>T
          <span className="small_text">HE </span>T
          <span className="small_text">EAM</span>
        </h2>

        {TeamData.map((item, index) => (
          <MeetTeam
            key={index}
            img={item.img}
            Aorder={item.Aorder}
            cap1={item.cap1}
            cap2={item.cap2}
            smtxt1={item.smtxt1}
            smtxt2={item.smtxt2}
            subtitles={item.subtitle}
            text={item.text}
            instagram={item.instagram}
            linkedin={item.linkedin}
          />
        ))}

      </div>

      <div className="our_story">
        <h2>
          O<span className="small_text">UR </span>S
          <span className="small_text">TORY </span>
        </h2>

        <img src={sujoy_hitesh} alt="" />

        <div className="content">
          <p>
            So, you guys must be wondering how we got an idea for
            ‘Nexustraders’. All founders are people who have always been keen on
            the stock market area and never thought about getting into it as it
            is known as ‘A risky gamble’. A few months before the pandemic,
            Sujoy and Hitesh were casually talking about a venture that would
            help them earn money and that's when the stock market topic came up.
            We immediately started research and started making small
            investments. But we couldn’t do much like our college timings always
            collided with the market timings. But soon the pandemic hit and
            lockdown came into the scenario. It was like an opportunity
            presented itself to us and we obviously took full advantage of the
            situation. We went all in without knowing about the consequences and
            what was waiting for us! Then after a long and tiring 6 months of
            constant experience and digging knowledge from the market, we
            started to figure it out and do well for ourselves in intraday
            trading and swing trades. Hitesh had an idea that we should start
            teaching this to others as well. We told this idea to Deepesh as he
            was learning about long-term investment. So boom! That's it, we had
            a team now. So, one night (which was actually 5 nights) Sujoy
            thought about a name and came up with 'Nexustraders'. Nexus means a
            group or community and we quickly designed the logo that we agreed
            on. And so we became ‘'Nexustraders'. That's our story that you
            didn't know, but now you do. So go hit that enrolls button and join
            us like these hundreds of other students who are successfully making
            profits and progress in the stock markets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
