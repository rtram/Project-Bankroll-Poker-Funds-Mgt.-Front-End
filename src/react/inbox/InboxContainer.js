import React, { Component } from 'react';
import { connect } from 'react-redux'
import RequestContainer from './RequestContainer'

// import UserBalance from './UserBalance'
// import { fetchingUserBalances } from '../../redux/actions/users.js'

class InboxContainer extends Component {
  // componentDidMount() {
  //   this.props.fetchingUserBalances(this.props.currentUser)
  // }

  render() {
    return(
      <div>
        <RequestContainer />
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     currentUser: state.currentUser,
//     sent_transactions: state.sent_transactions,
//     received_transactions: state.received_transactions
//   }
// }

export default connect(null,)(InboxContainer);
