import React, { Component } from 'react';
import './App.css';

import Home from './react/home/Home.js'
import Login from './react/login/Login.js'
import Dashboard from './react/homepage/Dashboard.js'
import TransferHome from './react/transfer/TransferHome.js'
import Bank from './react/transfer/bankContainer/Bank.js'
import TransferForm from './react/transfer/transferFormContainer/TransferForm.js'

import { Switch, Route, Link } from 'react-router-dom'

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>

          <Route path='/home' render={props => {
            return <Home />
          }} />

          <Route path='/users/:id' render={props => {
            let user_id = props.match.params.id
            return (
              <div>
              <Menu fixed='top' inverted>
                <Container>
                  <Menu.Item as='a' header>
                    <Link to='/home'>
                      <Image size='tiny' src='https://i.imgur.com/7LjNOYe.png' style={{  marginRight: '1.5em' }}  />
                    </Link>
                  </Menu.Item>
                  <Menu.Item as='a' position='left'>
                    <Link to='/home'>
                      Home
                    </Link>
                  </Menu.Item>
                  <Menu.Item as='a' position='right'>
                    <Link to='/users/1'>
                      Poker Dashboard
                    </Link>
                  </Menu.Item>
                  <Menu.Item as='a' position='right'>
                    <Dropdown item text='Transfers'>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link style={{ color: 'black' }} to='/users/1/transferhome'>
                            Transfer Dashboard
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link style={{ color: 'black' }} to='/users/1/bank'>
                            Deposit or Withdraw to Bank
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link style={{ color: 'black' }} to='/users/1/transfer'>
                            Pay Or Request Money
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Item>
                </Container>
              </Menu>

                <Container text style={{ marginTop: '7em' }}>
                  <Route path='/users/:id/transferhome' render={props => {
                    return <TransferHome id={user_id}/>
                  }} />

                  <Route path='/users/:id/bank' render={props => {
                    return <Bank id={user_id}/>
                  }} />

                  <Route path='/users/:id/transfer' render={props => {
                    return <TransferForm id={user_id}/>
                  }} />

                  <Route exact path='/users/:id' render={props => {
                    return <Dashboard id={user_id}/>
                  }} />
                </Container>

                <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                  <Container textAlign='center'>
                    <Grid divided inverted stackable>
                      <Grid.Column width={3}>
                        <Header inverted as='h4' content='Group 1' />
                        <List link inverted>
                          <List.Item as='a'>Link One</List.Item>
                          <List.Item as='a'>Link Two</List.Item>
                          <List.Item as='a'>Link Three</List.Item>
                          <List.Item as='a'>Link Four</List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header inverted as='h4' content='Group 2' />
                        <List link inverted>
                          <List.Item as='a'>Link One</List.Item>
                          <List.Item as='a'>Link Two</List.Item>
                          <List.Item as='a'>Link Three</List.Item>
                          <List.Item as='a'>Link Four</List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header inverted as='h4' content='Group 3' />
                        <List link inverted>
                          <List.Item as='a'>Link One</List.Item>
                          <List.Item as='a'>Link Two</List.Item>
                          <List.Item as='a'>Link Three</List.Item>
                          <List.Item as='a'>Link Four</List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column width={7}>
                        <Header inverted as='h4' content='Footer Header' />
                        <p>
                          Extra space for a call to action inside the footer that could help re-engage users.
                        </p>
                      </Grid.Column>
                    </Grid>

                    <Divider inverted section />
                    <Image centered size='mini' src='/logo.png' />
                    <List horizontal inverted divided link size='small'>
                      <List.Item as='a' href='#'>
                        Site Map
                      </List.Item>
                      <List.Item as='a' href='#'>
                        Contact Us
                      </List.Item>
                      <List.Item as='a' href='#'>
                        Terms and Conditions
                      </List.Item>
                      <List.Item as='a' href='#'>
                        Privacy Policy
                      </List.Item>
                    </List>
                  </Container>
                </Segment>
              </div>
            )
          }} />

          <Route path='/login' render={props => {
            return <Login />
          }} />

        </Switch>
      </div>
    );
  }
}

export default App;
