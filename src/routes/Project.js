import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";
const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Some of my projects." text=""/>
      <Work/>
      <Footer />
    </div>
  );
};

export default Project;
