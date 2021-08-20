import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const MainHeader = () => {
  return (
    <div className="main-header">
      <img
        src="/images/illustrations/hello3.svg"
        alt=""
        className="img-fluid"
      />
      <div className="content">
        <p className="hello">HELLO!</p>
        <h2>
          I'm Otunba
          <span>
            Marcus
            <img src="/images/marker.svg" alt="" />
          </span>
        </h2>
        <p className="abt">Web Developer & Mobile Application Developer</p>
        <div className="icons">
          <a href="https://www.twitter.com/marcuzdrip">
            <FaTwitter />
          </a>
          <a href="https://www.twitter.com/marcuzdrip">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/iammarcuz__">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/ademola-otunba-marcus-742ab1209">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <img src="/images/wave-bg.svg" alt="" className="wave" />
    </div>
  );
};

export default MainHeader;
