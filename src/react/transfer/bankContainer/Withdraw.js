import React, { Component } from 'react';
import WithdrawConfirmation from './WithdrawConfirmation.js'
import {
  Container,
  Segment,
  Header,
  Divider,
  Grid,
  Input,
  Icon
 } from 'semantic-ui-react'

export default class Withdraw extends Component {
  constructor() {
    super()
    this.state={
      withdraw: 0
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  clearWithdrawState = () => {
    this.setState({
      withdraw: 0
    })
  }

  render() {
    return(
      <Segment
        style={{
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
                action={{ color: 'red', labelPosition: 'left', icon: 'minus', content: 'Amount' }}
                actionPosition='left'
                placeholder='$'
                type='number'
                min="0.01"
                step="0.01"
                name='withdraw'
                value={this.state.withdraw}
              />
            </Container>
            <Container style={{marginTop:'1em'}}>
              <WithdrawConfirmation
                withdraw={this.state.withdraw}
                clearWithdrawState={this.clearWithdrawState}
              >
                Withdraw
              </WithdrawConfirmation>
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
        <Divider vertical>Withdraw</Divider>
      </Segment>
    )
  }
}
