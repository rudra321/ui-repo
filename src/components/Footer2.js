// Footer2.js
import React from "react";
import "./Footer2Styles.css";
import { jobData } from "./jobData"; // Import the job data

const Footer2 = () => {
  return (
    <div className="exp-container">
      <h1 style={{ textAlign: "center", margin: "15px" }}>
        My Work Experience.
      </h1>
      {jobData.map((job) => (
        <div className="exp-sheet" key={job.id}>
          <h1 style={{ fontStyle: 'italic', paddingTop: "15px"}}>{job.company}</h1>
          <div className="exp-card">
            <div className="comp-logo">
              <img src={job.logo} alt="hi" className="comp-img" />
            </div>
            <div className="exp-details">
              <h1 className="role-heading">{job.role}</h1>
              <p className="work-duration">{job.location} | {job.duration}</p>
              <ul
                className="work-points"
                style={{ listStyleType: "disc", color: "white" }}
              >
                {job.description.map((item, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item }} // Render HTML content
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer2;
