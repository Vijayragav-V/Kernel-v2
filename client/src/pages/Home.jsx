import React from "react";
import Hero from "../components/home/Hero";
import Cards from "../components/home/Features";
import ExtracurricularSection from "../components/home/Extracurriculars";
import Contact from "../components/home/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <ExtracurricularSection />
      <Contact />
    </>
  );
};

export default Home;
