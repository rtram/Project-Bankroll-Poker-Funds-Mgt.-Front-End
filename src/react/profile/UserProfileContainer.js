import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { fetchingUserBalances } from '../../redux/actions/users.js'
import UserProfile from './UserProfile'
import UserProfileBankInfo from './UserProfileBankInfo'

class UserProfileContainer extends Component {
  componentDidMount() {
    // FETCHES CURRENT USER OBJECT
    this.props.fetchingUserBalances(localStorage.getItem('currentUser'))
  }

  render() {
    return (
      <Container
        style={{
          marginTop: '10em'
        }}
      >
        <UserProfile />
        <UserProfileBankInfo />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, { fetchingUserBalances })(UserProfileContainer)
