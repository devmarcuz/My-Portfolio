import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <div className="compact">
        <h2>My Resume</h2>
        <img src="/images/marker.svg" alt="" />
      </div>

      <div className="content">
        <h2 className="title">Education</h2>
        <div className="timeline-area">
          <div className="card">
            <h2>SACRED HEART CATHOLIC COLLEGE</h2>
            <p className="date">2012 - 2018</p>
            <i>Abeokuta, Ogun</i>
            <p className="level">Senior secondary school</p>
          </div>
          <div className="card">
            <h2>OBAFEMI AWOLOWO UNIVERSITY</h2>
            <p className="date">2021 - Present</p>
            <i>Ife, Osun</i>
            <p className="level">Tertiary education</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
