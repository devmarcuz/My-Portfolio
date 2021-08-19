import React from "react";

const Services = () => {
  return (
    <div className="service">
      <div className="compact">
        <h2>My Services</h2>
        <img src="/images/marker.svg" alt="" />
      </div>
      <p className="offer">
        I offer services fit for any website or app. I can quickly maximize
        timely deliverables for real time schemas
      </p>
      <div className="img">
        <div className="card">
          <img src="/images/services/web-design.svg" alt="" />
          <p>Web Development</p>
        </div>
        <div className="card">
          <img src="/images/services/graphic-design.svg" alt="" />
          <p>Graphic Design</p>
        </div>
        <div className="card">
          <img src="/images/services/ui-ux.svg" alt="" />
          <p>UI/UX</p>
        </div>
        <div className="card">
          <img src="/images/services/app-development.svg" alt="" />
          <p>App Development</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
