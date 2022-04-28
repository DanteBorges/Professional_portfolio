import React from "react";
import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Portifolio from "../../components/Portifolio"
import MyWork from "../../components/MyWork"
// import HireMe from "../../components/HireMe/"
import About from "../../components/About";
import Footer from "../../components/Footer";
import SubscribeNow from "../../components/SubscribeNow";



const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <MyWork/>
      <Portifolio/>
      {/* <HireMe/> */}
      <SubscribeNow/>
      <Footer/>
    </>
  );
};

export default Home;
