import React, { Component } from 'react';

import './Header.css';

export default class Header extends Component {

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    let navbarDropdown = document.getElementById("top-menu");
    navbarDropdown.classList.toggle("hidden");
  }

  render(){

    return(

      <header className="top-head">
        <div className="top-head-logo-row">
          <p className="top-head-logo">FirmaniBuyut</p>
          <i className="fas fa-bars top-menu-bars" onClick={()=>this.handleClick()}></i>
        </div>
        <nav id="top-menu" className="hidden">
          <ul className="top-menu-list">
            <li className="top-menu-list-item"><p>DASHBOARD</p></li>
            <li className="top-menu-list-item"><p>APPLICATIONS</p></li>
            <li className="top-menu-list-item"><p>STATISTICS</p></li>
            <li className="top-menu-list-item"><p>CONTROL PANEL</p></li>
          </ul>
        </nav>
      </header>

    );
  }
    
}