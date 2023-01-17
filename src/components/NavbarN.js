import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../files/logo2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const NavbarN = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="py-3 navbar md:flex h-20 bg-gradient-to-r from-purple-500 to-pink-500 justify-center items-center uppercase font-bold  ">
        {/* <Link to="/">
          <img
            src={logo}
            width="20%"
            className="relative right-20 "
            alt="technitilogo"
          />
        </Link> */}
        <h1 className="text-2xl mr-10"> techNITi</h1>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 
          cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
        <ul
          className={`md:flex  space-x-10  md:items-center md:pb-0 absolute  md:static pb-12 md:z-auto z-[-1] left-0 w-full md:w-auto md-pl-0 pl-9 transition-all duration-500 ease-in  bg-gradient-to-r from-purple-500 to-pink-500 ${
            open ? "top-20 opacity-100" : "top-[-490px] "
          } md:opacity-100 `}
        >
          <li className="md:ml-8 md:my-0 my-7">
            <Link to="/" className="hover:text-gray-700 ml-10">
              Home
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7">
            <Link to="/events">Events</Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7">
            <Link to="/about">About Us</Link>
          </li>
          {/* <li className="md:ml-8 md:my-0 my-7">
            <Link to="/team">Our Team</Link>
          </li> */}
          {/* <button className="bg-indigo-200 text-white py-2 px-6 rounded md:ml-8 ">btn</button> */}
        </ul>
      </nav>
    </>
  );
};

export default NavbarN;
