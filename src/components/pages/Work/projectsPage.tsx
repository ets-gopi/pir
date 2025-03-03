import React from "react";
import projectsPageStyles from "./projects.module.css";
import { projectsdata } from "./projectsinfo";
const ProjectsPage = () => {
  return (
    <React.Fragment>
      <section id="projects" className={projectsPageStyles.projects}>
        <header>
          <h2>Some Things I&rsquo;ve Built</h2>
        </header>
        {projectsdata?.map((obj, ind) => {
          return (
            <article key={ind} className={`${projectsPageStyles.projectCard}`}>
              <figure
                className={`${
                  ind % 2 === 0
                    ? projectsPageStyles.evenfigure
                    : projectsPageStyles.oddfigure
                }`}
              >
                <img src={obj.links[0]} alt="" />
                <div className={projectsPageStyles.overlay}></div>
              </figure>
              <div
                className={`${projectsPageStyles.cardContent} ${
                  ind % 2 === 0
                    ? projectsPageStyles.cardContentEven
                    : projectsPageStyles.cardContentOdd
                }`}
              >
                <p>Featured Project</p>
                <h4>{obj.title}</h4>
                <div
                  style={{ textAlign: `${ind % 2 === 0 ? "end" : "start"}` }}
                  dangerouslySetInnerHTML={{ __html: obj.description }}
                  className={`${
                    ind % 2 === 0
                      ? projectsPageStyles.evenMargin
                      : projectsPageStyles.oddMargin
                  }`}
                ></div>
                <ul>
                  {obj.tags.map((val, ind) => (
                    <li key={ind}>{val}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default ProjectsPage;
