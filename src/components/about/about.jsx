import React from "react";
import "./about.css";
import ME from "../../assets/me2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>3+ Experience</h5>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>3+ Experience</h5>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>3+ Experience</h5>
            </article>
          </div>

          <p>
            LeremLeremLeremLeremLeremLeremLerem 
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
