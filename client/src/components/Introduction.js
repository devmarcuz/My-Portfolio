import React from "react";

const Introduction = () => {
  return (
    <div className="intro">
      <div className="content">
        <h3>Hello I'm Otunba Marcus</h3>
        <p>
          I am passionate about Web Development and App Development. I am a
          skilled front-end developer, back-end developer and app developer. I
          am a quick learner and a team worker that gets job done. I can easily
          capitalize on low hanging fruits and quickly maximize timely
          deliverables for real-time schemas.
        </p>
        <ul className="info">
          <li>
            <p>Age:</p>
            <h4>19</h4>
          </li>
          <li>
            <p>Email:</p>
            <h4>otunbamarcusademola@gmail.com</h4>
          </li>
          <li>
            <p>Phone:</p>
            <h4>+234 803-591-5522</h4>
          </li>
          <li>
            <p>Address:</p>
            <h4>Ogun State, Nigeria</h4>
          </li>
          <li>
            <p>Status:</p>
            <h4>Available</h4>
          </li>
        </ul>
      </div>
      <div className="img">
        <img src="/images/profile.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Introduction;
