import React, { Component } from 'react';
import { connect } from 'react-redux'

import TransferHistoryContainer from './transfercontainer/TransferHistoryContainer.js'
import TransferProfile from './TransferProfile'

import { fetchingUserData } from '../../redux/actions/users.js'

class TransferHome extends Component {
  componentDidMount() {
    this.props.fetchingUserData(this.props.id)
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


export default connect(null, { fetchingUserData })(TransferHome);
