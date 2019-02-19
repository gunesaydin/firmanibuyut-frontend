import React, { Component } from 'react';

import './Login.css';

export default class Login extends Component {

  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    // HANDLE SUBMIT
  }

  render(){

    return(
      <main className="main-container">
        <form className="login-form">
          <h3>Login</h3>
          
          <input 
            type="text" 
            placeholder="Username" 
            required="true" 
            className="form-input">
          </input>

          <input 
            type="password" 
            placeholder="Password" 
            required="true" 
            className="form-input">
          </input>

          <button className="form-submit-button" onClick={(e) => this.handleSubmit(e)}>LOGIN</button>
        </form>
      </main>
    );
  }
}