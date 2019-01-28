import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchingUserBalances } from '../../../redux/actions/users.js'
import UserBalance from '../UserBalance'
import Deposit from './Deposit.js'
import Withdraw from './Withdraw.js'

class BankTransfer extends Component {
  componentDidMount() {
    this.props.fetchingUserBalances(localStorage.getItem('currentUser'))
  }

  render() {
    return(
      <>
        <UserBalance />
        <Deposit />
        <Withdraw />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { fetchingUserBalances })(BankTransfer);
