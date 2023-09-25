import React from "react";
import "./TechStackStyles.css";
import {
  FaBootstrap,
  FaCss3,
  FaDocker,
  FaFigma,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";

const TechStack = () => {
  return (
    <>
      <div className="mukhya-container">
        <h1 className="title-text-tech">Tech Stack</h1>
        <div className="all-icons-container">
          <FaReact size={40}/>
          <FaJava size={40} />
          <FaFigma size={40} />
          <FaPython size={40} />
          <FaBootstrap size={40} />
          <FaHtml5 size={40} />
          <FaCss3 size={40} />
          <FaDocker size={40} />
          <FaLinux size={40} />
          <FaGithub size={40} />
          <FaJs size={40} />
        </div>
      </div>
    </>
  );
};

export default TechStack;
