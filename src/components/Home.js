import React, { useEffect } from "react";
import video1 from "../files/Tech.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import bgimg from "../files/banner.png";
import aos from "aos";
import "aos/dist/aos.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineMobile,
} from "react-icons/ai";
const Home = () => {
  const backgroundImg = {
    backgroundImage: `url(${bgimg})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="homepage">
      <video id="background-video" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>

      <div className="h-full w-full md:mt-6 absolute top-0 flex flex-col justify-center items-center sm:text-5xl sm:mb-10 ">
        <h1
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className=" text-7xl  techniti-text  "
        >
          techNITi 2023
        </h1>
      </div>

      <div className="text-neutral-100 textsection  " style={backgroundImg}>
        <h2
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className=" relative font-bold top-5 text-neutral-100 text-3xl text-center"
        >
          About NIT Jalandhar
        </h2>

        <p
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className="text-neutral-100 px-6  relative top-10 para-text text-center"
        >
          Dr.B.R.Ambedkar National Institute of Technology was established in
          the year 1987 as Regional Engineering College and was given the status
          of National Institute of Technology (Deemed University) by the Govt.
          of India on October 17, 2002, under the aegis of the Ministry of Human
          Resource Development, Govt of India, it has declared the institute as
          Institute of National Importance under the act of Parliament 2007.
          According to the NIRF ranking, the Institute has been ranked 42nd
          among all engineering colleges.
        </p>
        <h2
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className=" relative font-bold top-20 text-neutral-100 text-3xl text-center"
        >
          techNiTi 2023
        </h2>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className="text-neutral-100 mt-3 leading-7  md:px-5 relative top-20 para-text text-center"
        >
          We are excited to announce that Dr. B R Ambedkar National Institute of
          Technology, Jalandhar (NIT Jalandhar) is organizing north zone’s
          biggest annual techno-managerial fest from 25th to 28th February, 2023
          in its campus and we’d love to see you among us at the event. There’s
          so much in it for everyone, from coding geeks to start-up enthusiasts,
          from gamers to designers, from drone shows to ATV races, from robo
          wars to a fashion parade. It’ll be one stop for all the technological
          and design enthusiasts from all the domains. Teams from colleges and
          universities across nation will be participating in the events. The
          prizes for winners are as exciting as the competitions. We thus invite
          you to complement us in our celebration of technology.
        </p>
        <h2
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className=" relative font-bold top-20 mt-4 mb-2 text-neutral-100 text-3xl text-center"
        >
          How to Reach Us
        </h2>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className="text-neutral-100 md:mt-10  top-10 leading-7  px-5 relative  para-text text-center"
        >
          The city of Jalandhar is situated between the rivers Sutlej and Beas
          on NH-1. It is one of the important towns of Punjab It is an
          internationally renowned center for sports leather goods and hand
          tools. The city is 370 km from Delhi en route to Amritsar and is
          easily accessible from Delhi by train or bus. The Institute is located
          on GT Road ByPass at a distance of 14 Km from Jalandhar city railway
          station and 15 Km from Jalandhar Cantt railway station Auto rickshaw
          and taxi services are available regularly from the railway station.
        </p>
      </div>
      <div className="footer">
        <h2
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className="text-4xl text-center relative top-3"
        >
          Contact Us
        </h2>
        <div className="flex flex-wrap justify-between  ">
          <div>
            <div className="flex flex-col">
              <AiFillMail />
              <p>technitij@nitj.ac.in</p>
            </div>
            <div>
              <AiOutlineMobile /> 9795331310(M)
            </div>
          </div>
          <ul className="flex flex-wrap justify-between gap-5">
            <li className="text-white text-4xl">
              <a>
                <AiFillInstagram />
              </a>
            </li>
            <li className="text-white text-4xl">
              <a>
                <AiFillFacebook />
              </a>
            </li>
            <li className="text-white text-4xl">
              <a>
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
