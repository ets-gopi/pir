import React from 'react';
import projectsPageStyles from './projects.module.css';
import { projectsdata } from './projectsinfo';
import Link from '../../Links/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import DefaultSectionHeader from '../DefaultSectionHeader/defaultSectionHeader';
const ProjectsPage = () => {
    return (
        <React.Fragment>
            <section id="projects" className={projectsPageStyles.projects}>
                <DefaultSectionHeader value="Some Things I&rsquo;ve Built" />

                {projectsdata?.map((obj, ind) => {
                    return (
                        <article key={ind} className={`${projectsPageStyles.projectCard}`}>
                            <div className={`${projectsPageStyles.cardContent}`}>
                                <p>Featured Project</p>
                                <h4>{obj.title}</h4>
                                <div dangerouslySetInnerHTML={{ __html: obj.description }}></div>
                                <ul className={''}>
                                    {obj.tags.map((val, ind) => (
                                        <li key={ind}>{val}</li>
                                    ))}
                                </ul>
                                <Link url={obj.links[1]}>
                                    <FontAwesomeIcon icon={faGithub} title="Github" />
                                </Link>
                            </div>
                            <figure>
                                <img src={obj.links[0]} alt="" />
                                <div className={projectsPageStyles.overlay}></div>
                            </figure>
                        </article>
                    );
                })}
            </section>
        </React.Fragment>
    );
};

export default ProjectsPage;
