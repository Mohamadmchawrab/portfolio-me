import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import './footer.css'
function footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        LOGO
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="http">
          <FaFacebookF />
        </a>
        <a href="http">
          <FiInstagram />
        </a>
        <a href="http">
          <IoLogoTwitter />
        </a>
      </div>
    </footer>
  );
}

export default footer;
