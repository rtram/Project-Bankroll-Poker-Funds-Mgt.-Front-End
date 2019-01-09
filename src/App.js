import React, { Component } from 'react';
import './App.css';
import Login from './components/login'
import Dashboard from './components/dashboard'

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
