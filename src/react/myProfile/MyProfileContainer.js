import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingUserBalances } from '../../redux/actions/users.js'
import MyProfileInfo from './MyProfileInfo'
import MyProfileBankInfo from './MyProfileBankInfo'

class MyProfileContainer extends Component {
  componentDidMount() {
    // FETCHES CURRENT USER OBJECT
    this.props.fetchingUserBalances(localStorage.getItem('currentUser'))
  }

  render() {
    return (
      <div>
        <MyProfileInfo />
        <MyProfileBankInfo />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, { fetchingUserBalances })(MyProfileContainer)
