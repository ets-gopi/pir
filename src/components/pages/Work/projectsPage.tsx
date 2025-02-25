import React from "react";
import projectsPageStyles from "./projects.module.css";
import { defaultLogo } from "../../../assets";
const ProjectsPage = () => {
  return (
    <React.Fragment>
      <section id="projects" className={projectsPageStyles.projects}>
        <header>03.Some Things I&rsquo;ve Built</header>
        <div>
          <div>
            <figure>
              <img src={defaultLogo} alt="" />
            </figure>
            <div>

            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProjectsPage;
