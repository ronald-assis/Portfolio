import React from "react";
import Icon from "../../icons/Icon";
import "./informationAboutMe.css";

function InformationAboutMe() {
  return (
    <div className="info-about-me">
      <div className="titles">
        <h1>Ronald Assis</h1>
        <h2>Desenvolvedor Web</h2>
      </div>
      <div className="paragraph">
        <p>
        Olá,
        <br />
        Sou estudante de desenvolvimento web na Trybe, uma escola de programação que ensina
        a programar, a aprender e a trabalhar! O objetivo é me torna um Dev Jr Full-Stack, mas já
        estou apto para Front-End. Que venha o Back-End também.
        </p>
      </div>
      <div className="link-to-github">
        <a
          href="https://github.com/ronald-assis/Portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github" />
          <span>potifolio</span>
        </a>
      </div>
    </div>
  );
}

export default InformationAboutMe;
