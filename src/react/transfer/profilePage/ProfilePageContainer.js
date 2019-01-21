import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { fetchingSelectedProfile, fetchingUserBalances } from '../../../redux/actions/users.js'
import TransferHistoryContainer from '../transfercontainer/TransferHistoryContainer.js'
import ProfileInformation from './ProfileInformation'
import PayForm from './PayForm'
import RequestForm from './RequestForm'
import { Container } from 'semantic-ui-react'

class ProfilePageContainer extends Component {
  componentDidMount() {
    this.props.fetchingSelectedProfile(this.props.id)
    this.props.fetchingUserBalances(localStorage.getItem('currentUser'))
  }

  render() {
    return(
      this.props.selectedProfile ?
      <Container
        style={{
          marginTop: '15em'
        }}
      >
        <Button onClick={this.handleClear}> Back </Button>
        <PayForm />
        <RequestForm />
        <ProfileInformation username={this.props.selectedProfile.username} first_name={this.props.selectedProfile.first_name} last_name={this.props.selectedProfile.last_name}/>
        <TransferHistoryContainer sent_transactions={this.props.selectedProfile.sent_transactions} received_transactions={this.props.selectedProfile.received_transactions} />
      </Container>:
      null
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    selectedProfile: state.selectedProfile[0]
  }
}

export default connect(mapStateToProps, { fetchingSelectedProfile, fetchingUserBalances })(ProfilePageContainer);
