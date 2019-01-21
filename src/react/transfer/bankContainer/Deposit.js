import React, { Component } from 'react';
import DepositConfirmation from './DepositConfirmation.js'
import {
  Segment,
  Header,
  Divider,
  Grid,
  Input,
 } from 'semantic-ui-react'

export default class Deposit extends Component {
  constructor() {
    super()
    this.state={
      deposit: 0
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  clearDepositState = () => {
    this.setState({
      deposit: 0
    })
  }

  render() {
    return(
      <Segment
        style={{
          marginTop: '5em',
          height: '15em'
        }}
      >
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
            <Header>Account</Header>
            <Input
              onChange={this.handleChange}
              action={{ color: 'green', labelPosition: 'left', icon: 'plus', content: 'Amount' }}
              actionPosition='left'
              placeholder='$'
              type='number'
              min="0.01"
              step="0.01"
              name='deposit'
              value={this.state.deposit}
            />
            <DepositConfirmation
              deposit={this.state.deposit}
              clearDepositState={this.clearDepositState}
            >
              Deposit
            </DepositConfirmation>
          </Grid.Column>
          <Grid.Column>
            <Header>Bank</Header>
          </Grid.Column>
        </Grid>

        <Divider vertical>Make A Deposit</Divider>
      </Segment>
    )
  }
}
