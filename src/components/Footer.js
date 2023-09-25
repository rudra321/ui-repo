import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./FooterStyles.css";

import React from "react";

const Footer = () => {
  const linkedinurl = "https://www.linkedin.com/in/rudra321";
  const githuburl = "https://www.github.com/rudra321";
  const emailaddr = "rudrap5201@gmail.com";
  const phoneNumber = "+91-8619142679";
  const handleClick = () => {
    const mailtoLink = `mailto:${emailaddr}`;
    window.location.href = mailtoLink;
  };

  const handleCopyClick = () => {
    // Create a temporary text area to hold the phone number
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = phoneNumber;

    // Append the text area to the document
    document.body.appendChild(tempTextArea);

    // Select the text inside the text area
    tempTextArea.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary text area from the document
    document.body.removeChild(tempTextArea);

    // Alert the user that the phone number has been copied
    alert("Phone number copied to clipboard!");
  };
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <div className="emoji-container">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </div>
            <div>
              <p>Jhalawar, Rajasthan, India</p>
            </div>
          </div>
          <div className="phone">
            <div className="emoji-2">
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
                onClick={handleCopyClick}
              />
              <div>
                <p>+91-8619142679</p>
              </div>
            </div>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
                onClick={handleClick}
                // cursor={"grab"}
              />
              rudrap5201@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            Hey there!! I'm Rudra Pratap Singh Chouhan, a graduate Software Developer with
            over 9 months of internship experience in crafting user-friendly and visually
            appealing websites. I specialize in Front-end development, responsive design etc. My
            journey in development started at mewt(fin-tech company), where I learnt React Native and JS. I earned my degree in Computer Science from BITS Pilani, GOA.
          </p>
          <div className="social">
            <a href={linkedinurl} target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href={githuburl} target="_blank" rel="noopener noreferrer">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
