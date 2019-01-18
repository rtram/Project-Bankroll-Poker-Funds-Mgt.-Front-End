import React, { Component } from 'react'
import { Container, Divider, Header } from 'semantic-ui-react'


class Request extends Component {

  render() {
    return(
      <Container>
        <Header as='h3'>{this.props.request.requestor.first_name} {this.props.request.requestor.last_name}</Header>
        <Header as='h4'>{this.props.request.date}</Header>
        <Header as='h4'>{this.props.request.amount}</Header>
        <p>{this.props.request.message}</p>
        <Divider />
      </Container>
    )
  }
}



export default Request
