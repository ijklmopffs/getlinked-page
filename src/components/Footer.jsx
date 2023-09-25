import React from "react";
import x from "../assets/Vectorx.svg";
import f from "../assets/Vectorf.svg";
import I from "../assets/VectorI.svg";
import n from "../assets/Vectorn.svg";
import group from "../assets/Group.svg";
import l from "../assets/VectorL.svg";

export default function Footer() {
  return (
    <>
      <footer className="text-white my-5">
        <div className="flex justify-around flex-col md:flex-row">
          <div>
            <p className="text-3xl text-white font-extrabold text-start">
              get<span className="text-[#d434fe]">linked</span>
            </p>
            <p className="w-96 text-start my-5">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className="flex gap-1 items-center">
              <p>Terms of use</p>
              <div className="bg-[#d434fe] h-4 w-[2px]"></div>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="flex flex-col my-2 gap-4 text-start">
            <p className="text-[#d434fe]">Useful Links</p>
            <a href="/">Overview</a>
            <a href="/">Timeline</a>
            <a href="/">FAQs</a>
            <a href="/">Register</a>
            <div className="flex gap-2 items-center">
              <a href="/" className="text-[#d434fe]">
                Follow us
              </a>
              <img src={n} alt="" className="w-5" />
              <img src={x} alt="" className="w-4" />
              <img src={f} alt="" className="w-2" />
              <img src={I} alt="" className="w-4" />
            </div>
          </div>
          <div className="flex flex-col gap-4 text-start">
            <p className="text-[#d434fe]">Contact Us</p>
            <div className="flex items-center gap-2">
              <img src={group} alt="" />
              <p>+234 6707653444</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={l} alt="" />
              <p className="w-36">27,Alara Street Yaba 100012 Lagos State</p>
            </div>
          </div>
        </div>
        <div className="my-10 text-center">
          <p>All rights reserved. © getlinked Ltd.</p>
        </div>
      </footer>
    </>
  );
}
