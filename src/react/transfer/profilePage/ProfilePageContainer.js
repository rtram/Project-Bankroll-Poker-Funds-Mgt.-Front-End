import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

import { clearSelectedProfile } from '../../../redux/actions/users.js'
import TransferHistoryContainer from '../transfercontainer/TransferHistoryContainer.js'
// import UserBalance from './UserBalance'

class ProfilePageContainer extends Component {

  handleClear = () =>{
    this.props.clearSelectedProfile()
  }

  render() {
    return(
      <div>
        <Button onClick={this.handleClear}> Back </Button>
        UserProfile
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { clearSelectedProfile })(ProfilePageContainer);
