import React from "react";
import Icon from "../../icons/Icon";
import "./menu.css";

function Navigation() {
  return (
    <nav>
      <div className="navigation">
        <a className="nav-button" href="#about">
          <Icon name="person" />
          <span className="about-span">Sobre</span>
        </a>

        <a className="nav-button" href="#projects">
          <Icon name="code" />
          <span>Projetos</span>
        </a>

        <a className="nav-button contact-link" href="#contact">
          <Icon name="email" />
          <span>Contato</span>
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
