import React from "react";
import Navbar from "../components/Navbar";
import x from "../assets/Vectorx.svg";
import f from "../assets/Vectorf.svg";
import I from "../assets/VectorI.svg";
import n from "../assets/Vectorn.svg";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="text-white my-10 flex text-start justify-between">
        <div className="hidden md:block">
          <h2 className="text-[#d434fe] text-xl font-bold my-4">
            Get in touch
          </h2>
          <p className="w-2 my-4">Contact information</p>
          <p className="w-32 my-4">27,Alara Street Yaba 100012 Lagos State</p>
          <p>Call Us : 07067981819</p>
          <p className="my-4 w-72">
            we are open from Monday-Friday 08:00am - 05:00pm
          </p>
          <div>
            <p className="text-[#d434fe] font-semibold">Share on</p>
            <div className="flex gap-2">
              <img src={x} alt="" className="w-4" />
              <img src={f} alt="" className="w-2" />
              <img src={I} alt="" className="w-4" />
              <img src={n} alt="" className="w-5" />
            </div>
          </div>
        </div>
        <div className="bg-[#d434fe]/10 md:p-28 p-10 w-full md:w-1/2 pt-10 flex flex-col justify-center rounded-md items-center text-start">
          <p className="text-[#d434fe] font-semibold">
            Questions or need assistance?
          </p>
          <p className="text-[#d434fe] font-semibold mb-10">
            Let us know about it!
          </p>
          <p className="mb-2 font-semibold">
            Email us below to any question related to our event
          </p>
          <form action="" method="post" className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="First Name"
              className="hidden md:block border-2 border-white bg-transparent w-96 p-1 rounded-sm placeholder:text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Team Name"
              className="border-2 md:hidden border-white bg-transparent w-96 p-1 rounded-sm placeholder:text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Topic"
              className="border-2 md:hidden border-white bg-transparent w-96 p-1 rounded-sm placeholder:text-white focus:outline-none"
            />
            <input
              type="email"
              name=""
              id="mail"
              placeholder="Mail"
              className="border-2 border-white hidden md:block bg-transparent w-96 p-1 rounded-sm placeholder:text-white focus:outline-none"
            />
            <input
              type="email"
              name=""
              id="mail"
              placeholder="Email"
              className="border-2 md:hidden border-white bg-transparent w-96 p-1 rounded-sm placeholder:text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Message"
              className="border-2 border-white bg-transparent w-96 p-44 px-1 pt-1 rounded-sm placeholder:text-white focus:outline-none"
            />
          </form>
          <button className="bg-gradient-to-r from-[#d434fe] to-[#903aff] p-2 px-10 rounded-sm mt-5 w-44">
            Submit
          </button>
        </div>
      </section>
    </>
  );
}
