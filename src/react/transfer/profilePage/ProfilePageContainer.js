import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { fetchingSelectedProfile, fetchingUserBalances } from '../../../redux/actions/users.js'
import TransactionHistoryContainer from '../transactioncontainer/TransactionHistoryContainer.js'
import ProfileInformation from './ProfileInformation'
import PayModal from './PayModal'
import RequestModal from './RequestModal'
import { Container } from 'semantic-ui-react'

class ProfilePageContainer extends Component {
  componentDidMount() {
    // FETCHES NON-CURRENT USER PROFILE OBJECT
    this.props.fetchingSelectedProfile(this.props.id)
    // FETCHES CURRENT USER OBJECT
    this.props.fetchingUserBalances(localStorage.getItem('currentUser'))
  }

  render() {
    return(
      this.props.selectedProfile ?
      <Container
        style={{
          marginTop: '10em'
        }}
      >
        <Link to='/usersearch'>
          <Button
            style={{
              marginBottom: '5em'
            }}
          >
            Back to User List
          </Button>
        </Link>
        <ProfileInformation username={this.props.selectedProfile.username} first_name={this.props.selectedProfile.first_name} last_name={this.props.selectedProfile.last_name}/>
        <PayModal />
        <RequestModal />
        <TransactionHistoryContainer
         sent_transactions={this.props.selectedProfile.sent_transactions} received_transactions={this.props.selectedProfile.received_transactions} />
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
