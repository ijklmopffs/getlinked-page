import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Idea from "../components/Idea";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Idea />
      <Footer />
    </>
  );
}
