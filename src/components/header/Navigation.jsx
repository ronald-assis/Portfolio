import React from 'react';
//import code from '../images/code.svg';
//import email from '../images/email.svg';
//import person from '../images/person.svg';
import './styles/navigation.css';

import Icon from '../../icons/Icon'

function Navigation() {
  return (
    <nav>
      <div className="navigation">
        <div className="nav-button">
            <a href="#"> 
            {/*<img src={ person } alt='Person img' />*/}
              <Icon name='person' />

              <span>Sobre</span>
            </a>
        </div>

        <div className="nav-button">
            <a href="#"> 
              <span>Porjetos</span>
            </a>
        </div>
        <div className="nav-button">
            <a href="#"> 
              <span>Contato</span>
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
