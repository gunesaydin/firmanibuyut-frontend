import React, { Component } from 'react';

import './Header.css';

export default class Header extends Component {

  render(){


    return(
      <header className="top-head">
        <div className="top-head-logo-row">
          <p className="top-head-logo">FirmaniBuyut</p>
          <i className="fas fa-bars top-menu-bars"></i>
        </div>
        <nav className="top-menu">
          <ul className="top-menu-list">
            <li className="top-menu-list-item">DASHBOARD</li>
            <li className="top-menu-list-item">APPLICATIONS</li>
            <li className="top-menu-list-item">STATISTICS</li>
            <li className="top-menu-list-item">CONTROL PANEL</li>
          </ul>
        </nav>
      </header>
    );
  }
    
}