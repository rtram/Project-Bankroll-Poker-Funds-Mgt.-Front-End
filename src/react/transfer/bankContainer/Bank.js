import React, { Component } from 'react';
import { connect } from 'react-redux'
import { } from '../../../redux/actions/users.js'
import TransferProfile from '../TransferProfile'
import Deposit from './Deposit.js'
import Withdraw from './Withdraw.js'

class Bank extends Component {
  // componentDidMount() {
  //   this.props.fetchingUserData(this.props.id)
  // }

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

export default connect(null, { })(Bank);
