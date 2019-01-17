import React, { Component } from 'react';
import { connect } from 'react-redux'

import TransferHistoryContainer from './transfercontainer/TransferHistoryContainer.js'
import UserBalance from './UserBalance'

import { fetchingUserBalances } from '../../redux/actions/users.js'

class TransferHome extends Component {
  componentDidMount() {
    this.props.fetchingUserBalances(this.props.currentUser)
  }

  render() {
    return(
      <div>
        <UserBalance />
        <TransferHistoryContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { fetchingUserBalances })(TransferHome);
