import React, { Component } from 'react';
import './App.css';

import NavBar from './NavBar.js'
import Footer from './Footer.js'
import Home from './react/home/Home.js'
import Login from './react/login/Login.js'
import Dashboard from './react/homepage/Dashboard.js'
import TransferHome from './react/transfer/TransferHome.js'
import Bank from './react/transfer/bankContainer/Bank.js'
import TransferForm from './react/transfer/transferFormContainer/TransferForm.js'
import CasinoMap from './react/casinoMap/CasinoMap.js'

import { Switch, Route } from 'react-router-dom'

import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>

          <Route exact path='/home' render={props => {
            return <Home />
          }} />

          <Route path='/login' render={props => {
            return <Login />
          }} />

              <div>


              <NavBar />

              <Route path='/map' render={props => {
                return <CasinoMap />
              }} />

                <Container text style={{ marginTop: '7em' }}>

                  <Route path='/users/:id/transferhome' render={props => {
                    return <TransferHome id={props.match.params.id}/>
                  }} />

                  <Route path='/users/:id/bank' render={props => {
                    return <Bank id={props.match.params.id}/>
                  }} />

                  <Route path='/users/:id/transfer' render={props => {
                    return <TransferForm id={props.match.params.id}/>
                  }} />

                  <Route exact path='/users/:id' render={props => {
                    return <Dashboard id={props.match.params.id}/>
                  }} />
                </Container>

              <Footer />

              </div>

        </Switch>
      </div>
    );
  }
}

export default App;
