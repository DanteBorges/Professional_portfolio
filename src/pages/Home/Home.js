import React from "react";
import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Mywork from "../../components/MyWork"
import Portifolio from "../../components/Portifolio"
import HireMe from "../../components/HireMe/"
import About from "../../components/About";
import Footer from "../../components/Footer";




const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Mywork/>
      <Portifolio/>
      <HireMe/>
      <Footer/>

    </>
  );
};

export default Home;
