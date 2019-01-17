import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import NavBar from './NavBar.js'
import Footer from './Footer.js'
// import Home from './react/home/Home.js'
import SignUp from './react/login/SignUp.js'
import Login from './react/login/Login.js'
import Dashboard from './react/homepage/Dashboard.js'
import TransferHome from './react/transfer/TransferHome.js'
import Bank from './react/transfer/bankContainer/Bank.js'
import TransferForm from './react/transfer/transferFormContainer/TransferForm.js'
import ProfilePageContainer from './react/transfer/profilePage/ProfilePageContainer.js'
import CasinoMap from './react/casinoMap/CasinoMap.js'

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import { Container } from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
          <Container text style={{ marginTop: '7em' }}>
          <Switch>
            <Route exact path='/login' render={() => {
                if (Number.isInteger(this.props.currentUser)) {
                  return <Redirect to='/dashboard' />
                } else {
                  return <Login />
                }
              }} />
            <Route path='/map' render={props => {
              return <CasinoMap />
            }} />
            <Route path='/signup' render={props => {
              if (Number.isInteger(this.props.currentUser)) {
                return <Redirect to='/dashboard' />
              } else {
              return <SignUp />
              }
            }} />
            <Route exact path='/dashboard' render={() => {
              if (Number.isInteger(this.props.currentUser)) {
                return <Dashboard />
              } else {
                return <Redirect to='/login' />
              }
            }}/>
            <Route path='/transferhome' render={() => {
              if (Number.isInteger(this.props.currentUser)) {
                return <TransferHome />
              } else {
                return <Redirect to='/login' />
              }
            }}/>
            <Route path='/bank' render={() => {
              if (Number.isInteger(this.props.currentUser)) {
                return <Bank />
              } else {
                return <Redirect to='/login' />
              }
            }}/>
            <Route path='/transferform' render={() => {
              if (Number.isInteger(this.props.currentUser)) {
                return <TransferForm />
              } else {
                return <Redirect to='/login' />
              }
            }}/>
          </Switch>
          </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps)(App));
