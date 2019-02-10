import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchingUserBalances } from '../../../redux/actions/users.js'
import UserBalance from '../UserBalance'
import Deposit from './Deposit.js'
import Withdraw from './Withdraw.js'
import '../../../App.css'

class BankTransfer extends Component {
  componentDidMount() {
    this.props.fetchingUserBalances(localStorage.getItem('currentUser'))
  }

  render() {
    return(
      <div class='margin-bottom'>
        <UserBalance />
        <Deposit />
        <Withdraw />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { fetchingUserBalances })(BankTransfer);
