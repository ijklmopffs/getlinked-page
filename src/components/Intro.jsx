import React from "react";
import man from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import screen from "../assets/Image 1.png";
import bulb from "../assets/Creative 1.svg";
import chain from "../assets/chain-9365116-7621444.svg";
import lights from "../assets/1f4a5.svg";
import { Link } from "react-router-dom";
import starB from "../assets/starB.svg";
import star from "../assets/star.svg";

export default function Intro() {
  return (
    <>
      <hr className="mt-4" />
      <section className="flex flex-col md:flex-row mt-20 p-4 justify-between items-center">
        <div className="absolute md:right-60 md:top-40 top-32 z-[-10]">
          <p className="text-white text-2xl md:text-4xl font-black ">
            Igniting a Revolution in HR Innovation
          </p>
          <div className="line md:left-96 left-64 absolute w-52 md:w-64"></div>
        </div>
        <div className="mt-5 bg-contain bg-no-repeat bg-center">
          <img src={star} alt="" />
          <div className="flex items-end justify-end w-64 md:w-[27rem]">
            <img src={bulb} alt="" className="w-10" />
          </div>
          <h1 className="text-4xl md:text-6xl text-white font-black text-start mb-1">
            getlinked Tech
          </h1>
          <div className="flex items-center">
            <p className="text-4xl md:text-6xl text-white font-black text-start">
              Hackathon <span className="text-[#d434fe]">1.0</span>
            </p>
            <img src={chain} alt="" className="w-20" />
            <img src={lights} alt="" className="w-16" />
          </div>
          <p className="text-white md:text-start w-96 md:my-10">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Link
            to="/register"
            className="flex items-center justify-center md:items-start md:justify-start"
          >
            <button className="text-white bg-gradient-to-r from-[#d434fe] to-[#903aff] p-2 px-10 rounded-sm my-8">
              Register
            </button>
          </Link>
          <img src={starB} alt="" />
          <div className="flex items-start my-20 gap-4 text-white text-6xl">
            <p className="">
              00<span className="text-sm">H</span>
            </p>
            <p>
              00<span className="text-sm">M</span>
            </p>
            <p>
              00<span className="text-sm">S</span>
            </p>
          </div>
        </div>
        <div
          className="bg-contain bg-no-repeat"
          style={{ backgroundImage: `url('${man}')` }}
        >
          <img src={starB} alt="" />
          <div className="">
            <img src={screen} alt="" className="" />
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}
