import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchingUserBalances } from '../../../redux/actions/users.js'
import TransferProfile from '../TransferProfile'
import Deposit from './Deposit.js'
import Withdraw from './Withdraw.js'

class Bank extends Component {
  componentDidMount() {
    this.props.fetchingUserBalances(this.props.currentUser)
  }

  render() {
    return(
      <div>
        <TransferProfile />
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

export default connect(mapStateToProps, { fetchingUserBalances })(Bank);
