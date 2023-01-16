import React from "react";
// import img from "../files/img1.gif";
import { Link } from "react-router-dom";

const EventsCard = ({ Imgsrc, EventName, prize, link }) => {
  return (
    <>
      <div class="w-80 rounded overflow-hidden shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
        <div class="font-bold text-xl mb-2 m-2">{EventName}</div>

        <img class="w-full" src={Imgsrc} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <p class="text-gray-700 text-base">more...</p>
        </div>
        <div class="px-6 pt-1 pb-1 flex justify-center">
          <span class="transition-all bg-fuchsia-400 hover:bg-gradient-to-r from-purple-500 to-pink-500 bg-gray-200 rounded px-1 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
            INR {prize} + Prizes
          </span>
          <span class="transition-all bg-fuchsia-600 hover:bg-gradient-to-r from-purple-500 to-pink-500 rounded px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <a href={link} target="_blank">
              Register Here
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default EventsCard;
