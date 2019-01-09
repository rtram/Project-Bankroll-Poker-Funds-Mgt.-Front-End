import React, { Component } from 'react';
import './App.css';
import Login from './react/login/login.js'
import Dashboard from './react/homepage/dashboard.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login />
          <Dashboard />
        </header>
      </div>
    );
  }
}

export default App;
