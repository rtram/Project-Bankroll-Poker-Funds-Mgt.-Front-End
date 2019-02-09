import React, { Component } from 'react';
import './App.css';

import NavBar from './NavBar.js'
import Footer from './Footer.js'
import Main from './Main.js'

class App extends Component {

  render() {

    return (
      <div className="app">
        <NavBar />
        <div class="wrapper">
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App
