import React, { Component } from 'react';
import { connect } from 'react-redux'
import TransferProfile from '../TransferProfile'
import UserList from './UserList'
import SearchBar from './SearchBar'
import { fetchingUserList, fetchingUserBalances } from '../../../redux/actions/users.js'

class TransferForm extends Component {
  componentDidMount() {
    this.props.fetchingUserBalances(this.props.currentUser)
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

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { fetchingUserList, fetchingUserBalances })(TransferForm);
