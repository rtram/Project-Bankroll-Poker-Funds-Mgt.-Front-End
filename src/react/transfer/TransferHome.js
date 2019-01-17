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
        <TransferHistoryContainer sent_transactions={this.props.sent_transactions} received_transactions={this.props.received_transactions} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    sent_transactions: state.sent_transactions,
    received_transactions: state.received_transactions
  }
}

export default connect(mapStateToProps, { fetchingUserBalances })(TransferHome);
