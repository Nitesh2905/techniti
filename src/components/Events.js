import React, { useEffect } from "react";
import EventsCard from "./EventsCard";
import prayaas from "../files/prayaas.png";
import robohunt from "../files/robohunt.jpg";
import microrobowar from "../files/microrobowar.jpg";
import LumentRace from "../files/lumenTrace.jpg";
import hackathon from "../files/hackathon.jpg";
import boltbolt from "../files/boltbolt.jfif";
import robowars from "../files/robowars.jpg";
import smarttank from "../files/smartank.jpg";
import trickycircuits from "../files/trickycircuits.jpg";
import gaNIT from "../files/gaNIT.jfif";
import Chassisside from "../files/Chassisside.webp";
import UAVdrone from "../files/UAVdrone.jpg";
import RCcars from "../files/RCcars.jpg";
import atv from "../files/atv.jpg";
import heatexchanger from "../files/heatexchanger.jpg";
import tBHK from "../files/3bhk.jfif";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import bgimg from "../files/webbg.jpg";

// const images = [
//   {
//     robohunt,

//   },

// ];

const registerLinks = [
  {
    hackathon: "https://www.nitj.ac.in/events_registration/hackmol/login",
  },
];

const Events = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="p-5  mx-auto justify-center gap-8 flex flex-wrap eventsPage">
      <a
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        href="https://hackmol.tech/"
        target="_blank"
      >
        <EventsCard
          Imgsrc={hackathon}
          EventName="HackMOL 4.0"
          link={registerLinks[0].hackathon}
          prize="60000"
        />
      </a>

      <Link
        to="/chemecar"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <EventsCard Imgsrc={Chassisside} EventName="Chem-E-Car" prize="10000" />{" "}
      </Link>
      <Link
        to="/chemedesign"
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <EventsCard
          Imgsrc={heatexchanger}
          EventName="CHEM-E-DESIGN"
          prize="10000"
        />
      </Link>
      <Link to="/prayaas">
        {" "}
        <EventsCard Imgsrc={prayaas} EventName="Prayass" prize="3000" />
      </Link>
      <Link to="/maths">
        <EventsCard Imgsrc={gaNIT} EventName="Integration Bee" prize="5500" />
      </Link>
      <Link to="/robohunt">
        <EventsCard Imgsrc={robohunt} EventName="RoboHunt" prize="3000" />
      </Link>
      <Link to="/microrobowar">
        {" "}
        <EventsCard
          Imgsrc={microrobowar}
          EventName="MicroRoboWar"
          prize="8000"
        />
      </Link>

      <Link to="/trickycircuits">
        <EventsCard
          Imgsrc={trickycircuits}
          EventName="TrickyCircuits"
          prize="5000"
        />
      </Link>
      <EventsCard Imgsrc={UAVdrone} EventName="UAV Drone" prize="" />
      <EventsCard Imgsrc={robowars} EventName="Robo Wars" prize="" />
      <EventsCard Imgsrc={RCcars} EventName="RC Cars" prize="" />
      <EventsCard
        Imgsrc={atv}
        EventName="Exhibition by Team Avishkar"
        prize="None"
      />

      <EventsCard Imgsrc={tBHK} EventName="3BHK" prize="Momentos & Goodies" />
      <EventsCard Imgsrc={LumentRace} EventName="LumentRace" prize="10500" />
      <EventsCard Imgsrc={smarttank} EventName="SmartTank" prize="4500" />
      <EventsCard Imgsrc={boltbolt} EventName="Bolt-Bolt" prize="10500" />
    </div>
  );
};

export default Events;
