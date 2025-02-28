import React from "react";
import expPageStyles from "./exp.module.css";
const ExpPage = () => {
  return (
    <React.Fragment>
      <section id="exp" className={expPageStyles.exp}>
        <header>
          <h2>Where I&rsquo;ve Worked</h2>
        </header>
        <div id={expPageStyles.expContent}>
          <>
            <span>
              <strong>Full Stack Developer</strong>{" "}
            </span>
            <span>
              <strong>@ Entitledarts</strong>
            </span>
            <p>2023 - Present</p>
            <ul>
              <li>
                {" "}
                Develop high-quality, reliable code for various client projects,
                including Goudla BlockChain and Haitmi Resort projects.
              </li>
              <li>
                {" "}
                Work with creative directors to research, develop, and design
                technical solutions that meet business needs.
              </li>
              <li>
                {" "}
                Collaborate with designers, project managers, and engineers to
                turn creative ideas into functional products.{" "}
              </li>
              <li>
                {" "}
                Support the engineering team by sharing knowledge, mentoring,
                and fostering teamwork.
              </li>
            </ul>
          </>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ExpPage;
