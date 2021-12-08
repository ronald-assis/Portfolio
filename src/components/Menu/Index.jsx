import React from 'react';
import Icon from '../../icons/Icon';
import './menu.css';

function Navigation() {
  return (
    <nav>
      <ul className="navigation">
        <li className="nav-button">
            <a href="/"> 
              <Icon name="person" />
              <span className="about-span">Sobre</span>
            </a>
        </li>

        <li className="nav-button">
            <a href="/"> 
              <Icon name="code" />
              <span>Porjetos</span>
            </a>
        </li>
        <li className="nav-button contact-link">
            <a href="/"> 
              <Icon name="email" />
              <span>Contato</span>
            </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
