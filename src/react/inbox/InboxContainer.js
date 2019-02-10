import React, { Component } from 'react';
import { connect } from 'react-redux'
import RequestContainer from './RequestContainer'
import UserBalance from '../transfer/UserBalance'
// import { Container } from 'semantic-ui-react'
import { fetchingUserBalances } from '../../redux/actions/users.js'
import '../../App.css'

class InboxContainer extends Component {
  componentDidMount() {
    this.props.fetchingUserBalances(localStorage.getItem('currentUser'))
  }

  render() {
    return(
      <div class='margin-bottom margin-top'>
        <UserBalance />
        <RequestContainer />
      </div>
    )
  }
}

export default connect(null, { fetchingUserBalances })(InboxContainer);
