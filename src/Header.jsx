import React from 'react';
import logo from './Images/logo.png'
import './index.css';

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="log" width="70" height="50" />
        <h1>Google App Clone</h1>
      </div>
    </>
  );
}

export default Header;
