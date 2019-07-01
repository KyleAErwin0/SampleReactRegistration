import React, { Component } from 'react';
import Header from '../common/header';
import Forms from '../common/forms';
import './registration.css';

class Registration extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content-container">
          <div className="right">&nbsp;</div>
          <div className="center">
            <Forms formType ="registration" />
          </div>
          <div className="left">&nbsp;</div>
        </div>
      </div>
    );
  }
}

export default Registration;
