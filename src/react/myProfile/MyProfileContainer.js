import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingUserBalances } from '../../redux/actions/users.js'
import MyProfileInfo from './MyProfileInfo'
import MyProfileBankInfo from './MyProfileBankInfo'
import '../../App.css'

class MyProfileContainer extends Component {
  componentDidMount() {
    // FETCHES CURRENT USER OBJECT
    this.props.fetchingUserBalances(localStorage.getItem('currentUser'))
  }

  render() {
    return (
      <div class='margin-bottom margin-top'>
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
