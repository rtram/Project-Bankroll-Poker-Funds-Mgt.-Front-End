import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { clearSelectedProfile } from '../../../redux/actions/users.js'
import TransferHistoryContainer from '../transfercontainer/TransferHistoryContainer.js'
import ProfileInformation from './ProfileInformation'
import PaymentConfirmation from './PaymentConfirmation'

class ProfilePageContainer extends Component {

  handleClear = () =>{
    this.props.clearSelectedProfile()
  }

  render() {
    return(
      <div>
        <Button onClick={this.handleClear}> Back </Button>
        <PaymentConfirmation />
        <ProfileInformation username={this.props.selectedProfile.username} first_name={this.props.selectedProfile.first_name} last_name={this.props.selectedProfile.last_name}/>
        <TransferHistoryContainer sent_transactions={this.props.sent_transactions} received_transactions={this.props.received_transactions} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    sent_transactions: state.selectedProfile[0].sent_transactions,
    received_transactions: state.selectedProfile[0].received_transactions,
    selectedProfile: state.selectedProfile[0]
  }
}

export default connect(mapStateToProps, { clearSelectedProfile })(ProfilePageContainer);
