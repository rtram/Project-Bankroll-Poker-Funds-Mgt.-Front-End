import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchingUserData } from '../../redux/actions/users.js'
import WinningPercentage from './winningpercentage'

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchingUserData()
  }

  render() {
    return (
      <div>
        <WinningPercentage />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.user.username,
    first_name: state.user.first_name,
    last_name: state.user.last_name,
    sessions: state.user.sessions
  }
}

export default connect(mapStateToProps, { fetchingUserData })(Dashboard);
