import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import MyWork from "../../components/MyWork";
import HireMe from "../../components/HireMe/"
import About from "../../components/About";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      
      <MyWork />
      <HireMe />
      <Footer />
    </>
  );
};

export default Home;
