import React from "react";
import Navbar from "../components/Navbar";
import desk from "../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import one from "../assets/1f6b6-2640.svg";
import two from "../assets/image_processing20200511-10310-13mnlsx.svg";

export default function Register() {
  return (
    <>
      <Navbar />

      <section className="flex flex-col md:flex-row justify-between text-white">
        <div>
          <img src={desk} alt="" />
        </div>
        <div className="bg-[#d434fe]/10 md:p-28 p-10 w-full md:w-1/2 flex flex-col justify-center rounded-md items-start text-start">
          <h2 className="text-[#d434fe] font-bold text-4xl text-start mb-10">
            Register
          </h2>
          <div className="flex items-center">
            <p>Be part of this movement</p>
            <img src={one} alt="" />
            <img src={two} alt="" />
          </div>
          <h3 className="my-10 font-semibold text-2xl">CREATE YOUR ACCOUNT</h3>
          <div>
            <form
              action=""
              className="flex flex-wrap flex-col md:flex-row gap-4 md:w-[35rem]"
            >
              <div className="w-72 md:w-64">
                <label htmlFor="">Team's Name</label>
                <input
                  type="text"
                  placeholder="Enter the name of your group"
                  className="border-2 border-white  md:block bg-transparent w-64 placeholder:text-xs p-1 rounded-sm placeholder:text-white focus:outline-none"
                />
              </div>
              <div className="w-72 md:w-64">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  pattern="[0-9]"
                  inputMode="numeric"
                  placeholder="Enter your phone number"
                  className="border-2 border-white  placeholder:text-xs md:block bg-transparent w-64 p-1 rounded-sm placeholder:text-white focus:outline-none"
                />
              </div>
              <div className="w-72 md:w-64">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="border-2 border-white placeholder:text-xs  md:block bg-transparent w-64 p-1 rounded-sm placeholder:text-white focus:outline-none"
                />
              </div>
              <div className="w-72 md:w-64">
                <label htmlFor="">Project Topic</label>
                <input
                  type="text"
                  placeholder="What is your group project topic"
                  className="border-2 border-white  placeholder:text-xs md:block bg-transparent w-64 p-1 rounded-sm placeholder:text-white focus:outline-none"
                />
              </div>
              <div className="w-72 md:w-64">
                <label htmlFor="">Category</label>
                <input
                  type="text"
                  placeholder="Select your category"
                  className="border-2 border-white  placeholder:text-xs md:block bg-transparent w-64 p-1 rounded-sm placeholder:text-white focus:outline-none"
                />
              </div>
              <div className="w-72 md:w-64">
                <label htmlFor="">Group Size</label>
                <input
                  type="text"
                  placeholder="Select"
                  className="border-2 border-white  placeholder:text-xs md:block bg-transparent w-64 p-1 rounded-sm placeholder:text-white focus:outline-none"
                />
              </div>
            </form>
            <p className="my-5 text-[#d434fe] text-xs">
              Please review your registration details before submitting
            </p>
            <div className="flex items-center gap-1 my-3 w-48 md:w-full">
              <input type="checkbox" name="" id="check" />
              <label htmlFor="check">
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>
            <button className="bg-gradient-to-r from-[#d434fe] to-[#903aff] p-2 px-10 md:w-full rounded-sm">
              Register Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
