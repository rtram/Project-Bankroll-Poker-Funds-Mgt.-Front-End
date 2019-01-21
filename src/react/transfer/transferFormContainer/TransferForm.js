import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
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
      <Container
        style={{
          marginTop: '10em',
          marginBottom: '10em'
        }}
      >
        <UserBalance />
        <UserList />
      </Container>
    )
  }
}

export default connect(null, { fetchingUserList, fetchingUserBalances })(TransferForm);
