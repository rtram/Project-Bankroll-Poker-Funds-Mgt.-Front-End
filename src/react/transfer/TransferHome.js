import React, { Component } from 'react';
import { connect } from 'react-redux'
import TransferHistoryContainer from './transfercontainer/TransferHistoryContainer.js'
import UserBalance from './UserBalance'
import { fetchingUserBalances } from '../../redux/actions/users.js'
import { Grid } from 'semantic-ui-react'

class TransferHome extends Component {
  componentDidMount() {
    this.props.fetchingUserBalances(localStorage.getItem('currentUser'))
  }

  render() {
    return(
      <Grid
        style={{
          marginTop: '10em',
          marginBottom: '10em'
        }}
      >
        <UserBalance />
        <TransferHistoryContainer sent_transactions={this.props.sent_transactions} received_transactions={this.props.received_transactions} />
      </Grid>
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
