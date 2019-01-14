import React, { Component } from 'react'
import { connect } from 'react-redux'
import { } from '../../../redux/actions/sessions.js'

import { Button, Modal } from 'semantic-ui-react'

class WithdrawConfirmation extends Component {
  constructor() {
    super()
    this.state = {
      open:false
    }
  }

  handleWithdraw = () => {

    this.handleToggle()
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

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
        <Button onClick={this.handleWithdraw}color='blue' style={{width:'200px'}}>Withdraw</Button>
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


export default connect(null, { })(WithdrawConfirmation)
