import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { clearSelectedProfile } from '../../../redux/actions/users.js'
import TransferHistoryContainer from '../transfercontainer/TransferHistoryContainer.js'

class ProfilePageContainer extends Component {

  handleClear = () =>{
    this.props.clearSelectedProfile()
  }

  render() {
    return(
      <div>
        <Button onClick={this.handleClear}> Back </Button>
        UserProfile
        <TransferHistoryContainer sent_transactions={this.props.sent_transactions} received_transactions={this.props.received_transactions} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    sent_transactions: state.selectedProfile[0].sent_transactions,
    received_transactions: state.selectedProfile[0].received_transactions
  }
}

export default connect(mapStateToProps, { clearSelectedProfile })(ProfilePageContainer);
