import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import './styles/header.css';

function Header () {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;