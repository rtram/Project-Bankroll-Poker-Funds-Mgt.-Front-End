import React, { Component } from 'react'
import { Container, Divider, Header } from 'semantic-ui-react'


class Transfer extends Component {

  // RETURNS OBJECT SENDER/RECIPIENT'S FULL NAME STRING
  fullNameConverter = (object, type) => {
    return object[type].first_name + ' ' + object[type].last_name
  }

  render() {
    return(
      <Container>
        <Header as='h4'>{this.fullNameConverter(this.props.transfer, 'sender')} paid {this.fullNameConverter(this.props.transfer, 'recipient')} ${this.props.transfer.amount} on {this.props.transfer.date}</Header>
        <p>{this.props.transfer.message}</p>
        <Divider />
      </Container>
    )
  }
}



export default Transfer
