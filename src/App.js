import React, { Component } from 'react';
import './App.css';

import NavBar from './NavBar.js'
import Footer from './Footer.js'
import Main from './Main.js'

class App extends Component {

  render() {

    return (
      <div className="App">

        <NavBar />
          <Main />
        <Footer className='footer'/>

      </div>
    );
  }
}

export default App
