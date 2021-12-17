import React from "react";
import maskGroup from "../images/mask_group.svg";
import projects from "../../Data";
import "./projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>Projetos</h1>
      {projects.map((project, index) => (
        <div className={`project-${index} project`} key={project.title}>
          <div className="info-of-project">
            <h2>{project.title}</h2>
            <p>{project.info}</p>
            <div className="language">
              {project.languages.map((language) => (
                <span key={language} className={language}>
                  {language}
                </span>
              ))}
            </div>
          </div>
          <img src={maskGroup} alt="project log" />
        </div>
      ))}
    </div>
  );
}

export default Projects;