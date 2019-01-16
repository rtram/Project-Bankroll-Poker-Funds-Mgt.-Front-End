import React, { Component } from 'react';
import { connect } from 'react-redux'
import TransferProfile from '../TransferProfile'
import UserList from './UserList'
import SearchBar from './SearchBar'
import { fetchingUserList } from '../../../redux/actions/users.js'

class TransferForm extends Component {
  componentDidMount() {
    // this.props.fetchingUserData(this.props.id)
    this.props.fetchingUserList()
  }

  render() {
    return(
      <div>
        <TransferProfile />
        Pay Or Request Money
        <SearchBar />
        <UserList />
      </div>
    )
  }
}

export default connect(null, { fetchingUserList })(TransferForm);
