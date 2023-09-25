import React from "react";
import NavBar from "../components/NavBar";
import HeroImg from "../components/HeroImg";
import ExtraCurr from "../components/ExtraCurr";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroImg />
      {/* <Footer /> */}
      <ExtraCurr/>
    </div>
  );
};

export default Home;
