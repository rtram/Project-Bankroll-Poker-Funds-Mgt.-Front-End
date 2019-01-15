import React, { Component } from 'react';
import { connect } from 'react-redux'
import TransferProfile from '../TransferProfile'
import UserList from './UserList'
import { fetchingUserData, fetchingUserList } from '../../../redux/actions/users.js'

class TransferForm extends Component {
  componentDidMount() {
    this.props.fetchingUserData(this.props.id)
    this.props.fetchingUserList()
  }

  render() {
    return(
      <div>
        <TransferProfile />
        Pay Or Request Money
        <UserList />
      </div>
    )
  }
}

export default connect(null, { fetchingUserData, fetchingUserList })(TransferForm);
