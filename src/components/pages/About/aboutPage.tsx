import React from "react";
import aboutPageStyles from "./about.module.css";
import { image2 } from "../../../assets";

const AboutPage = () => {
  return (
    <React.Fragment>
      <section id="about" className={aboutPageStyles.about}>
        <header>01.About Me</header>
        <div>
          <div>
            <div>
              Hello! My name is Gopi, and I love building things for the web. My
              web development journey began in 2022 when I customized a
              website&rsquo;s design. While working on a custom button, I
              learned a lot about HTML and CSS!
            </div>
            <div>
              Since then, I&rsquo;ve worked at a branding agency, a startup, a
              large company, and an advertising company. My main focus these
              days is building accessible, inclusive products and digital
              experiences at Entitledarts for a variety of clients.
            </div>
            <div>
              Here are a few technologies I&rsquo;ve been working with recently:
              <ul>
                <li>JavaScript (ES6+) </li>
                <li>TypeScript</li>
                <li> React </li>
                <li>Node.js </li>
                <li>Linux (Redhat)</li>
              </ul>
            </div>
          </div>
          <div>
            <figure>
              <img src={image2} alt="" />
            </figure>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutPage;
