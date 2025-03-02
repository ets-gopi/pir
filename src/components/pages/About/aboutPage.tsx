import React from "react";
import aboutPageStyles from "./about.module.css";
import { image2 } from "../../../assets";

const AboutPage = () => {
  return (
    <React.Fragment>
      <section id="about" className={aboutPageStyles.about}>
        <header>
          <h2>About Me</h2>
          <div>
            <div></div>
          </div>
        </header>
        <div id={aboutPageStyles.aboutContent}>
          <div>
            <div>
              Hello! My name is Gopi, and I love building things for the web. My
              web development journey began in 2022 when I customized a
              website&rsquo;s design. While working on a custom button, I
              learned a lot about HTML and CSS.
            </div>
            <div>
              Since then ,I&rsquo;ve worked at <span>a branding agency </span>{" "}
              .. , <span>a startup </span>and{" "}
              <span>an advertising company.</span> My main focus these days is
              building accessible, inclusive products and digital experiences at{" "}
              <span>Entitledarts</span> for a variety of clients.
            </div>
            <div>
              Here are a few technologies I&rsquo;ve been working with recently:
              <ul>
                <li>JavaScript (ES6+) </li>
                <li>TypeScript</li>
                <li> React </li>
                <li>Node.js </li>
                <li>Linux (Redhat)</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div>
            <figure>
              <div className={aboutPageStyles.rectangle}></div>
              <div className={aboutPageStyles.imageContainer}>
                <img src={image2} alt="" />
                <div className={aboutPageStyles.overlay}></div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutPage;
