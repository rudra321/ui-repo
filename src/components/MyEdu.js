import React from "react";
import "./MyEduStyles.css";

const MyEdu = () => {
  return (
    <div className="section-container education-container">
      <h1 className="section-title">My Education</h1>

      <div className="card-entry education-entry">
        <h2 className="card-heading school-name">
          Disha Delphi Global Public Senior Secondary School
        </h2>
        <p className="card-subtitle duration">2014 - 2018</p>
        <p className="card-description learned"></p>
      </div>

      <div className="card-entry education-entry">
        <h2 className="card-heading school-name">
          Birla Institute of Technology and Science, Pilani, Goa
        </h2>
        <p className="card-subtitle duration">2019 - 2023</p>
        <p className="card-description learned"></p>
      </div>

      {/* Add more education entries here */}
    </div>
  );
};

export default MyEdu;
