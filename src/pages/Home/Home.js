import React from "react";
import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import About from "../../components/About";
import Footer from "../../components/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Footer/>

    </>
  );
};

export default Home;
