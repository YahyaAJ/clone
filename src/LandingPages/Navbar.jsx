import React from "react";
import logo from "../assets/logo_medium.svg";

const Navbar = (props) => {
  return (
    <div className="font-bold shadow-[0_3px_20px_rgba(0,0,0,0.25)] text-white text-xl w-full h-[60px] sm:h-[80px] lg:h-[10vh] 3xl:h-[7vh] flex sm:justify-between items-center rounded-b-3xl -mt-1 px-5 sm:px-10 bg-[#22A6B3]">
      <svg
        className="sm:hidden text-white mr-3"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.66666 7C3.66666 6.44772 4.11437 6 4.66666 6H23.3333C23.8856 6 24.3333 6.44772 24.3333 7C24.3333 7.55228 23.8856 8 23.3333 8H4.66666C4.11437 8 3.66666 7.55228 3.66666 7ZM3.66666 14C3.66666 13.4477 4.11437 13 4.66666 13H23.3333C23.8856 13 24.3333 13.4477 24.3333 14C24.3333 14.5523 23.8856 15 23.3333 15H4.66666C4.11437 15 3.66666 14.5523 3.66666 14ZM3.66666 21C3.66666 20.4477 4.11437 20 4.66666 20H23.3333C23.8856 20 24.3333 20.4477 24.3333 21C24.3333 21.5523 23.8856 22 23.3333 22H4.66666C4.11437 22 3.66666 21.5523 3.66666 21Z"
          fill="white"
        />
      </svg>
      <img src={logo} alt="logo" className="w-[25%] sm:w-[18%] lg:w-[8%]" />
      <ul className="hidden sm:flex">
        <li className="mx-5">
          <a href="#tentang">TENTANG</a>
        </li>
        <li className="mx-5">
          <a href="#role">ROLE</a>
        </li>
        <li className="mx-5">
          <button onClick={props.button}>
            <a href={props.href}>{props.text}</a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
