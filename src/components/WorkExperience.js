import "./WorkExperienceStyles.css";
import React from "react";
import resume from "../assets/rpsc_resume.pdf";

const WorkExperience = () => {
  const handleDownloadResume = () => {
    const a = document.createElement("a");
    a.href = resume;
    a.download = "rpsc_resume.pdf";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="work-experience" style={{backgroundColor: "rgba(255,255,255,0.1)"}}>
      <div className="paged">
        <h2>Work Experience & Resume.</h2>
        <button onClick={handleDownloadResume} className="btn" >
          Resume
        </button>
      </div>
    </div>
  );
};

export default WorkExperience;
