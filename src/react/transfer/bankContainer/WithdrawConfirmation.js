import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatingUserBalance } from '../../../redux/actions/balances.js'

import { Button, Modal } from 'semantic-ui-react'

class WithdrawConfirmation extends Component {
  constructor() {
    super()
    this.state = {
      open:false
    }
  }

  handleWithdraw = () => {
    let updateObject = {
      id: this.props.id,
      balance: this.calculateTotal()
    }

    this.props.updatingUserBalance(updateObject)
    this.props.clearWithdrawState()
    this.handleToggle()
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  // RETURNS UPDATED BALANCE AS THE DIFF OF OLD BALANCE - WITHDRAWAL
  calculateTotal = () => {
    let balance = this.props.balance
    if (isNaN(balance)) {
      balance = 0
    }
    let withdraw = this.props.withdraw
    if (isNaN(withdraw) || withdraw === '') {
      withdraw = 0
    }
    let newTotal = parseFloat(balance) - parseFloat(withdraw)
    return newTotal
  }

  render() {
    return(
      <Modal open={this.state.open} size='large' trigger={
        <Button onClick={this.handleToggle}color='blue' style={{width:'200px'}}>Withdraw</Button>
      }>
        <Modal.Header>Withdraw Confirmation</Modal.Header>

        <Modal.Content>
          Withdraw ${this.props.withdraw} to bring Your Account Balance to ${this.calculateTotal()}
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleWithdraw}>Withdraw</Button>
          <Button color='grey' onClick={this.handleToggle}>Cancel</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    id: state.user.id,
    balance: state.user.balance
  }
}

export default connect(mapStateToProps, { updatingUserBalance })(WithdrawConfirmation)
