import React from "react";
// import img from "../files/img1.gif";
import { Link } from "react-router-dom";

const EventsCard = ({ Imgsrc, EventName, prize, link, desc, visit }) => {
  return (
    <>
      <div className="h-100 w-80 rounded bg-gradient-to-r from-purple-500 to-pink-500 overflow-hidden shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
        <div className="font-bold text-xl mb-2 m-2">{EventName}</div>

        <img className="w-full" src={Imgsrc} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
        <div className="px-6 pt-1 pb-1 flex justify-center">
          <span className="transition-all bg-fuchsia-100 hover:bg-gradient-to-r from-purple-500 to-pink-500 bg-gray-200 rounded px-1 py-2 text-sm font-semibold text-black mr-2 mb-2">
            INR {prize} + Prizes
          </span>
          <Link to={`/${visit}`}>
            <button className="transition-all  bg-fuchsia-100 hover:bg-gradient-to-r from-purple-500 to-pink-500 rounded px-3 py-2 text-sm font-semibold text-black mr-2 mb-2">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EventsCard;
