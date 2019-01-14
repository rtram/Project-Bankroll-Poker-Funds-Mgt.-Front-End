import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Header } from 'semantic-ui-react'

class TransferProfile extends Component {

  // RETURNS OBJECT'S FULL NAME STRING
  fullNameConverter = (object) => {
    return object.first_name + ' ' + object.last_name
  }

  // RETURNS INTEGER NUMBER TO FLOAT
  integerToFloat = (integer) => {
    let float = Math.round(integer * 100) / 100

    return float
  }

  render() {
    return (
      <div>
        {this.props ?
          <Container>
            <Header as='h1'>{this.fullNameConverter(this.props)}</Header>
            <Header as='h2'>Username: {this.props.username}</Header>
            <Header as='h2'>Account Balance: ${this.integerToFloat(this.props.balance)}</Header>
          </Container> : null}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user_id: state.user.id,
    username: state.user.username,
    first_name: state.user.first_name,
    last_name: state.user.last_name,
    balance: state.user.balance
  }
}

export default connect(mapStateToProps)(TransferProfile)
