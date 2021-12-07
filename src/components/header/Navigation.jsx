import React from 'react';
import code from '../images/code.svg';
import email from '../images/email.svg';
import person from '../images/person.svg';
import './styles/navigation.css';

function Navigation() {
  return (
    <nav>
      <div className="navigation">
        <div className="nav-button">
            <a href="#"> 
              <img src={ person } alt='Person img' />
              <span>Sobre</span>
            </a>
        </div>

        <div className="nav-button">
            <a href="#"> 
              <img src={ code } alt='Code img' />
              <span>Porjetos</span>
            </a>
        </div>
        <div className="nav-button">
            <a href="#"> 
              <img src={ email } alt='Email img' />
              <span>Contato</span>
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
