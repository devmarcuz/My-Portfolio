import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [bar, setBar] = useState(false);

  return (
    <div className="header">
      <h2>
        <Link to="/">Folio</Link>
      </h2>
      <ul className={bar ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/#service">Services</Link>
        </li>
        <li>
          <Link to="/skill">Skills</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <FaBars className="bars" onClick={() => setBar(!bar)} />
    </div>
  );
};

export default Header;
