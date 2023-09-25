import React, { useState } from "react";
import { Link } from "react-router-dom";
import bar from "../assets/VectorB.svg";
import close from "../assets/VectorC.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <Link to="/">
          <p className="text-3xl text-white font-extrabold">
            get<span className="text-[#d434fe]">linked</span>
          </p>
        </Link>
        <div
          className={
            nav
              ? "flex flex-col md:transition-none md:flex-row text-white items-center gap-16 md:gap-20 absolute top-28 bg-[#150e28] border-2 left-20 rounded-md w-80 h-[30rem] md:static md:bg-transparent md:w-auto md:border-0 md:h-0"
              : "flex flex-col md:transition-none md:flex-row text-white items-center gap-16 md:gap-20 absolute top-28 bg-[#150e28] border-2 left-[-100%] ease-in duration-700 rounded-md w-80 h-[30rem] md:static md:bg-transparent md:w-auto md:border-0 md:h-0"
          }
        >
          <Link to="/timeline">Timeline</Link>
          <Link to="/overview">Overview</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/register">
            <button className="bg-gradient-to-r from-[#d434fe] to-[#903aff] p-2 px-10 rounded-sm">
              Register
            </button>
          </Link>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {nav ? <img src={close} alt="" /> : <img src={bar} alt="" />}
        </div>
      </nav>
    </>
  );
}
