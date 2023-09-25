import React from "react";
import "./ExtraCurrStyles.css"
const ExtraCurr = () => {
  return (
    <div className="extracurrmaincontainerStyles">
      <h1>Extra Curricular</h1>
      <div className="extracurrcontainer">
        <ul className="extracurrtextstyle">
          <li style={{ padding: "15px" }}>
            Worked as a Core member of Department of Arts & Decorations. Worked
            on mega art structures of college fest.
          </li>
          <li style={{ padding: "15px" }}>
            Work towards social upliftment by teaching underprivileged students
            and organizing fun events monthly.
          </li>
          <li style={{ padding: "15px" }}>
            Won National College Ultimate Championship NCUC’23 and became the
            best Frisbee college team of India
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExtraCurr;
