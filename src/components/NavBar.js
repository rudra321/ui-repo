import "./NavBarStyles.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [ham, setHam] = useState(false);
  const handleClick = () => setHam(!ham);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Rudra Pratap Singh Chouhan</h1>
      </Link>
      <ul
        className={ham ? "nav-menu active" : "nav-menu"}
        style={{ listStyleType: "none" }}
      >
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Project">Projects</Link>
        </li>
        <li>
          <Link to="/Experience">Work Experience</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {ham ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
