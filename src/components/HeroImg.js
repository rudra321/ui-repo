import "./HeroImgStyles.css";

import React from "react";
import hero from "../assets/hero.jpg";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const HeroImg = () => {
  const linkedinurl = "https://www.linkedin.com/in/rudra321";
  const githuburl = "https://www.github.com/rudra321";
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={hero} alt="introimg" />
      </div>
      <div className="content">
        <h1>Rudra Pratap Singh Chouhan.</h1>
        <h1>Graduate, Developer & Neuroscience</h1>
        <div>
          <a href={linkedinurl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </a>
          <a href={githuburl} target="_blank" rel="noopener noreferrer">
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
