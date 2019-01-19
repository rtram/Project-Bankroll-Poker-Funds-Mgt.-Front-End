import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserBalance from '../UserBalance'
import UserList from './UserList'
import ProfilePageContainer from '../profilePage/ProfilePageContainer'
import { fetchingUserList, fetchingUserBalances } from '../../../redux/actions/users.js'

class TransferForm extends Component {
  componentDidMount() {
    this.props.fetchingUserBalances(localStorage.getItem('currentUser'))
    this.props.fetchingUserList()
  }

  render() {
    return(
      this.props.selectedProfile.length === 0 ?
      <div>
        <UserBalance />
        Pay Or Request Money
        <UserList />
      </div> :
      <div>
        <ProfilePageContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    selectedProfile: state.selectedProfile
  }
}

export default connect(mapStateToProps, { fetchingUserList, fetchingUserBalances })(TransferForm);
