import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Portofolio = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="portfolio">
      <div className="compact">
        <h2>Portfolio</h2>
        <img src="/images/marker.svg" alt="" />
      </div>
      <div className="img-flex">
        <div
          className="img"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img src="/images/portfolio/1-small.png" alt="" />
          <CSSTransition
            timeout={300}
            in={hover}
            classNames="alert"
            unmountOnExit
          >
            <Link className="hover" to="https://dribble.com">
              <p className="main">WEB DESIGN</p>
              <p className="main">GitHub.com</p>
            </Link>
          </CSSTransition>
        </div>
        <div className="img">
          <img src="/images/portfolio/2-small.png" alt="" />
          <Link className="hover" to="https://dribble.com">
            <p className="main">WEB DEVELOPMENT</p>
            <p className="main">GitHub.com</p>
          </Link>
        </div>

        <div className="img">
          <img src="/images/portfolio/6-small.png" alt="" />
          <Link className="hover" to="https://dribble.com">
            <p className="main">APP DEVELOPMENT</p>
            <p className="main">GitHub.com</p>
          </Link>
        </div>
        <div className="img">
          <img src="/images/portfolio/5-small.png" alt="" />
          <Link className="hover" to="https://dribble.com">
            <p className="main">GRAPIC DESIGN</p>
            <p className="main">GitHub.com</p>
          </Link>
        </div>
        <div className="img">
          <img src="/images/portfolio/7-small.png" alt="" />
          <Link className="hover" to="https://dribble.com">
            <p className="main">APP DESIGN</p>
            <p className="main">GitHub.com</p>
          </Link>
        </div>
        <div className="img">
          <img src="/images/portfolio/8-small.png" alt="" />
          <Link className="hover" to="https://dribble.com">
            <p className="main">APP DEVELOPMENT</p>
            <p className="main">GitHub.com</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
