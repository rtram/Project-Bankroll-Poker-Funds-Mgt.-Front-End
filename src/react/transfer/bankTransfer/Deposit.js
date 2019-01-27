import React, { Component } from 'react';
import DepositModal from './DepositModal.js'
import {
  Container,
  Segment,
  Header,
  Divider,
  Grid,
  Input,
  Icon
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
          height: '15em',
          backgroundColor: 'gainsboro'
        }}
      >
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
            <Container>
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
            </Container>
            <Container style={{marginTop: '1em'}}>
            <DepositModal
              deposit={this.state.deposit}
              clearDepositState={this.clearDepositState}
            >
              Deposit
            </DepositModal>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Header>Bank</Header>
            <Icon name='cogs' size='huge'/>
            <Header as='h3' style={{ color:'black'}}>
              Under Construction Come Back Later!
            </Header>
          </Grid.Column>
        </Grid>

        <Divider vertical>Make A Deposit</Divider>
      </Segment>
    )
  }
}
