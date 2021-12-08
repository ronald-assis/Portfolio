import React from 'react';
import Logo from '../Logo/Index';
import Menu from '../Menu/Index';
import './header.css';

function Header () {
  return (
    <header>
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;