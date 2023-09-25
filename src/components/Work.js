import "./WorkCardStyles.css";
import React from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
const Work = () => {
  return (
    <div className="work-container" style={{backgroundColor: "rgba(255,255,255,0.1)"}}>
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, idx) => {
          return (
            <WorkCard
              key={idx}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;