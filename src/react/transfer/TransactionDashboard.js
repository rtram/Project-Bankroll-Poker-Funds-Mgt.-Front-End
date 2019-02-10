import React, { Component } from 'react';
import { connect } from 'react-redux'
import TransactionHistoryContainer from './transactioncontainer/TransactionHistoryContainer.js'
import UserBalance from './UserBalance'
import { fetchingUserBalances } from '../../redux/actions/users.js'
import '../../App.css'

class TransactionDashboard extends Component {
  componentDidMount() {
    this.props.fetchingUserBalances(localStorage.getItem('currentUser'))
  }

  render() {
    return(
      <div class='margin-bottom'>
        <UserBalance />
        <TransactionHistoryContainer sent_transactions={this.props.sent_transactions} received_transactions={this.props.received_transactions} />
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

export default connect(mapStateToProps, { fetchingUserBalances })(TransactionDashboard);
