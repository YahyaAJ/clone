import React from "react";
import RoleCard from "./RoleCard";

function Role() {
  return (
    <div className="relative w-full pb-16">
      <div id="role" className="absolute top-36" />
      <svg
        className="relative -z-20 rotate-180"
        viewBox="0 0 1280 313"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_552_1035)">
          <path
            d="M0 299C497.063 174.492 777.444 175.036 1280 299V0H0V299Z"
            fill="#22A6B3"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_552_1035"
            x="-10"
            y="-6"
            width="1300"
            height="319"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_552_1035"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_552_1035"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div className="bg-[#22A6B3] h-14 sm:h-40 lg:h-[50vh lg:pt-[] 3xl:h-[15vh] lg:pb-[30%] -mt-1">
        <h1 className="text-white text-xl sm:text-5xl text-center -mt-5 sm:-mt-20 sm:leading-[3.75rem] ">
          Siapa saja yang
          <span className="font-bold"> berperan</span>
          <br />
          dalam sebuah
          <span className="font-bold"> Start-Up</span>?
        </h1>
      </div>
      <div className="relative flex lg:justify-center bg-[#22A6B3] scrollbar-none lg:bg-transparent overflow-x-auto lg:overflow-hidden text-black snap-mandatory lg:snap-none snap-x px-[15%] sm:px-[5%] lg:px-[10%] pt-[25%] sm:pt-[13%] lg:pt-24 pb-5 -mt-[1px] lg:mt-[-18%] gap-9">
        {RoleCard.map((data, index) => {
          return (
            <div
              key={index}
              className="relative flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_30%] border border-[#CDCDCD]  snap-center bg-white text-justify shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] rounded-3xl p-[7%] sm:p-[3%]"
            >
              <div className="relative">
                <img
                  src={data.image}
                  alt={data.role}
                  className="relative mt-[-55%] top-[-35%] inset-x-0 sm:w-[325px] z-[10]"
                />
                <img
                  src={data.bg}
                  className="absolute z-[1] w-[75%] sm:w-[70%] bottom-[15%] sm:bottom-[8%] left-[17%]"
                />
              </div>
              <h1 className="text-[1.8em] text-[#22A6B3] font-bold text-center pt-[-20%]">
                {data.role}
              </h1>
              <h3 className="font-[600] text-sm sm:text-base text-center">
                {data.as}
              </h3>
              <p className="pt-3 container">{data.desc}</p>
            </div>
          );
        })}
      </div>
      <p className="lg:hidden sm:text-2xl text-center text-white bg-[#22A6B3] pb-5 -mt-1 pt-[5%] rounded-b-3xl">
        <span className="font-bold">Daftarkan </span>
        dirimu!
      </p>
    </div>
  );
}

export default Role;
