import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchingUserBalances } from '../../../redux/actions/users.js'
import UserBalance from '../UserBalance'
import Deposit from './Deposit.js'
import Withdraw from './Withdraw.js'

class Bank extends Component {
  componentDidMount() {
    this.props.fetchingUserBalances(this.props.currentUser)
  }

  render() {
    return(
      <div>
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

export default connect(mapStateToProps, { fetchingUserBalances })(Bank);
