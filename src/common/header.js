import React, { Component } from 'react';
import './css/header.css';
import LogoImg from '../images/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <img className="logo" src={LogoImg} />
      </div>
    );
  }
}

export default Header;
