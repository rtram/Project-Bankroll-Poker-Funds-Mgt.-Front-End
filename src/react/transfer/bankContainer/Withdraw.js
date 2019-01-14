import React, { Component } from 'react';
import { connect } from 'react-redux'
import { } from '../../../redux/actions/users.js'
import WithdrawConfirmation from './WithdrawConfirmation.js'
import {
  Container,
  Segment,
  Header,
  Divider,
  Grid,
  Input,
 } from 'semantic-ui-react'

class Withdraw extends Component {
  constructor() {
    super()
    this.state={
      balance: 0,
      withdraw: 0
    }
  }

  componentDidMount() {
    this.setState({
      balance: this.props.balance
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return(
      <Container>
        <Segment>
          <Grid columns={2} relaxed='very'>
            <Grid.Column>
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
                <WithdrawConfirmation
                  balance={this.state.balance}
                  withdraw={this.state.withdraw}
                >
                  Withdraw
                </WithdrawConfirmation>
            </Grid.Column>
            <Grid.Column>
              <Header>Bank</Header>
            </Grid.Column>
          </Grid>
          <Divider vertical>Withdraw</Divider>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    balance: state.user.balance
  }
}

export default connect(mapStateToProps, { })(Withdraw);
