import React from "react";
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import Timeline from "../components/TimeLine";
import { Certification } from "../components/Certification";
import MyEdu from "../components/MyEdu";
import TechStack from "../components/TechStack";
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Know me." text=""/>
      <AboutContent/>
      {/* <Timeline/> */}
      <Certification/>
      <MyEdu/>
      <TechStack/>
      <Footer />
    </div>
  );
};

export default About;
