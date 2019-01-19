import React, { Component } from 'react'
import { connect } from 'react-redux'

import { postingRequest } from '../../../redux/actions/requests.js'

import { Button, Modal, Input } from 'semantic-ui-react'

class RequestForm extends Component {
  constructor() {
    super()
    this.state = {
      amount: 0,
      message:'',
      open:false
    }
  }

  resetState = () => {
    this.setState({
      amount: 0,
      message:'',
      open: false
    })
  }

  handleRequest = () => {

    let requestObject = {
      requestor_id: this.props.currentUser,
      requestee_id: this.props.selectedProfile.id,
      message: this.state.message,
      amount: this.state.amount,
      date: this.formatDate()
    }

    this.props.postingRequest(requestObject)

    this.resetState()
    this.handleToggle()
  }

  formatDate = () => {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  // RETURNS UPDATED BALANCE AS THE DIFF OF OLD BALANCE - PAYMENT
  calculateTotal = () => {
    let balance = this.props.balance
    if (isNaN(balance)) {
      balance = 0
    }
    let payment = this.state.amount
    if (isNaN(payment) || payment === '') {
      payment = 0
    }
    let newTotal = parseFloat(balance) + parseFloat(payment)
    return newTotal
  }

  render() {
    return(
      <Modal open={this.state.open} size='large' trigger={
        <Button onClick={this.handleToggle}color='blue' style={{width:'200px'}}>Request</Button>
      }>
        <Modal.Header>Request {this.props.selectedProfile.first_name}</Modal.Header>
        <Modal.Content>
          <Input
            onChange={this.handleChange}
            action={{ color: 'green', labelPosition: 'left', icon: 'dollar', content: 'Amount' }}
            actionPosition='left'
            placeholder='$'
            type='number'
            min="0.01"
            step="0.01"
            name='amount'
            value={this.state.amount}
          />
          <br/>
          <Input
            onChange={this.handleChange}
            placeholder='Leave a Message'
            type='textarea'
            name='message'
            value={this.state.message}
          />
          Requesting {this.props.selectedProfile.first_name} ${this.state.amount} will bring Your Account Balance to ${this.calculateTotal()}
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleRequest}>Request</Button>
          <Button color='grey' onClick={this.handleToggle}>Cancel</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    balance: state.balance,
    selectedProfile: state.selectedProfile[0]
  }
}

export default connect(mapStateToProps, { postingRequest })(RequestForm)
