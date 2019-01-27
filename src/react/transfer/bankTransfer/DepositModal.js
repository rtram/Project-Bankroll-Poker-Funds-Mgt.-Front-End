import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatingUserBalance } from '../../../redux/actions/balances.js'

import { Button, Modal } from 'semantic-ui-react'

class DepositModal extends Component {
  constructor() {
    super()
    this.state = {
      open:false
    }
  }

  handleDeposit = () => {
    let updateObject = {
      id: localStorage.getItem('currentUser'),
      balance: this.calculateTotal()
    }

    debugger

    this.props.updatingUserBalance(updateObject)
    this.props.clearDepositState()
    this.handleToggle()
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  // RETURNS UPDATED BALANCE AS THE SUM OF OLD BALANCE + DEPOSIT
  calculateTotal = () => {
    let balance = this.props.balance
    if (isNaN(balance)) {
      balance = 0
    }
    let deposit = this.props.deposit
    if (isNaN(deposit) || deposit === '') {
      deposit = 0
    }
    let newTotal = parseFloat(balance) + parseFloat(deposit)
    return newTotal
  }

  render() {
    return(
      <Modal open={this.state.open} size='large' trigger={
        <Button onClick={this.handleToggle} color='blue' style={{width:'200px'}}>Deposit</Button>
      }>
        <Modal.Header>Deposit Confirmation</Modal.Header>

        <Modal.Content>
          Deposit ${this.props.deposit} to bring Your Account Balance to ${this.calculateTotal()}
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleDeposit}>Deposit</Button>
          <Button color='grey' onClick={this.handleToggle}>Cancel</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance
  }
}

export default connect(mapStateToProps, { updatingUserBalance })(DepositModal)
