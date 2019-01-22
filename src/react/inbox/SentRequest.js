import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Divider, Header, Button } from 'semantic-ui-react'

import { deletingRequest } from '../../redux/actions/requests'

class SentRequest extends Component {

  handleCancel = () => {
    this.props.deletingRequest(this.props.request)
  }

  render() {
    return(
      <Container>
        <Header as='h3'>{this.props.request.requestee.first_name} {this.props.request.requestee.last_name}</Header>
        <Header as='h4'>{this.props.request.date}</Header>
        <Header as='h4'>Amount: {this.props.request.amount}</Header>
        <p>{this.props.request.message}</p>
        <Button onClick={this.handleCancel}>Cancel</Button>
        <Divider />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    balance: state.balance,
  }
}

export default connect(mapStateToProps, { deletingRequest })(SentRequest)
