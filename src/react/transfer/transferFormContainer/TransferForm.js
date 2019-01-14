import React, { Component } from 'react';
import { connect } from 'react-redux'
import TransferProfile from '../TransferProfile'
import { fetchingUserData } from '../../../redux/actions/users.js'

class TransferForm extends Component {
  componentDidMount() {
    this.props.fetchingUserData(this.props.id)
  }

  render() {
    return(
      <div>
        <TransferProfile />
        Pay Or Request Money
      </div>
    )
  }
}

export default connect(null, { fetchingUserData })(TransferForm);
