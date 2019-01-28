import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserBalance from '../UserBalance'
import UserSearchList from './UserSearchList'
import { fetchingUserList, fetchingUserBalances } from '../../../redux/actions/users.js'

class UserSearchContainer extends Component {
  componentDidMount() {
    this.props.fetchingUserBalances(localStorage.getItem('currentUser'))
    this.props.fetchingUserList()
  }

  render() {
    return(
      <>
        <UserBalance />
        <UserSearchList />
      </>
    )
  }
}

export default connect(null, { fetchingUserList, fetchingUserBalances })(UserSearchContainer);
