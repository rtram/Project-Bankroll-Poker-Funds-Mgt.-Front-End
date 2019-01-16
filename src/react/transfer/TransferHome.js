import React, { Component } from 'react';
import { connect } from 'react-redux'

import TransferHistoryContainer from './transfercontainer/TransferHistoryContainer.js'
import TransferProfile from './TransferProfile'

import { fetchingUserBalances } from '../../redux/actions/users.js'

class TransferHome extends Component {
  componentDidMount() {
    this.props.fetchingUserBalances(this.props.currentUser)
  }

  render() {
    return(
      <div>
        <TransferProfile />
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
