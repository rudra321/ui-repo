import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from "react";
import me3 from "../assets/me3.jpg";
const AboutContent = () => {
  return (
    <div className="xxx"

    >
      <div className="a1">
        <div className="r">
          <div className="i-container">
            <div className="img-stack top">
              <img src={me3} className="i" alt="img" />
            </div>
          </div>
        </div>
        <div className="l">
          <h1>Namaste!! I'm Rudra Pratap Singh Chouhan</h1>
          <p>
            I am a graduate student holding a degree in Computer Science from
            Birla Institute of Technology and Science, Pilani. Proficient in
            Python, JavaScript, React, Data Structures and Algorithms, and C++,
            my academic focus lies in Neuroscience and Human-Computer
            Interaction (HCI). Beyond academics, I am an active frisbee player
            and an enthusiastic reader with a penchant for Western and
            East-Asian literature, constantly seeking new perspectives and
            insights through the written word.
          </p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
