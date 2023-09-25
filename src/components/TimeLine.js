import React from "react";
import "./TimeLineStyles.css"; // Import your CSS file for styling

const Timeline = () => {
  return (
    <div className="timeline">
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        My Time Line.
      </h1>
      <div className="timeline-line" />
      <div className="timeline-item">
        <div className="timeline-point">
          <div style={{}}></div>
          <div className="timeline-detail">
            <h3>Graduated from BITS Pilani, August 2023</h3>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-point">
          <div className="timeline-detail">
            <h3>
              Won National College Ultimate Championship' 23 Title, February
              2023
            </h3>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-point">
          <div className="timeline-detail">
            <h3>Internship ends at Mewt, December 2022</h3>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-point">
          <div className="timeline-detail">
            <h3>Internship started at Mewt, December 2022</h3>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-point">
          <div className="timeline-detail">
            <h3>Internship ends at Village Book Builders, August 2021</h3>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-point">
          <div className="timeline-detail">
            <h3>Internship starts at Village Book Builders, July 2021</h3>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-point">
          <div className="timeline-detail">
            <h3>Joined BITS UFC, Department of Arts n Deco, Nirmaan Organization, 2019</h3>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-point">
          <div className="timeline-detail">
            <h3>Joined BITS Pilani Computer Science, July 2019</h3>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-point">
          <div className="timeline-detail">
            <h3>Qualified JEE Advanced (6794 Rank), JEE Mains (9005 Rank), 2019</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
