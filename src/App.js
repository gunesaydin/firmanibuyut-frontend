import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import FormsPage from './FormsPage';

import './App.css';

class App extends Component {

  render() {

    
    return (
      <div>
        <Header />

        <FormsPage />
  
        <Footer />
      </div>
    );
  }

}

export default App;
