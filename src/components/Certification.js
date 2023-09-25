import React from "react";
import "./CertificationStyles.css";
import nvidia from "../assets/nvidia.jpeg";

export const Certification = () => {
  return (
    <div className="section-container certification-container">
      <h1 className="section-title">My Certificates</h1>

      <a
        href={
          "https://courses.nvidia.com/certificates/8b34f92440cc4653a7c1792cfdad726f/"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="card-link certificate-card"
      >
        <div className="card-logo">
          <img src={nvidia} alt="NVIDIA" className="card-img" />
        </div>
        <div className="card-details">
          <h2 className="card-heading">
            Building Transformer-Based NLP Applications
          </h2>
        </div>
      </a>

      <a
        href={
          "https://courses.nvidia.com/certificates/c6473c15fb504cdfb829802e10902010/"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="card-link certificate-card"
      >
        <div className="card-logo">
          <img src={nvidia} alt="NVIDIA" className="card-img" />
        </div>
        <div className="card-details">
          <h2 className="card-heading">Fundamentals of Deep Learning</h2>
        </div>
      </a>
    </div>
  );
};
