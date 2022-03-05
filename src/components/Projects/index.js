import React from "react";
import projects from "../../projectsInformations";
import "./projects.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projetos</h1>
      {projects.map((project, index) => (
        <a
          href={project.repository}
          target="_blank"
          className={`${index % 2 === 0 ? "right" : "left"} project project-${index + 1}`}
          key={project.title} rel="noreferrer"
        >
          <div className="info-of-project">
            <h2>{project.title}</h2>
            <p>{project.info}</p>
            <div className="language">
              {project.languages.map((language) => (
                <span key={language} className={language.toLocaleLowerCase()}>
                  {language}
                </span>
              ))}
            </div>
          </div>
          <img src={project.image} alt="project log" />
        </a>
      ))}
    </div>
  );
}

export default Projects;
