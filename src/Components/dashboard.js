import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchingUserData } from '../actions/users'

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchingUserData()
  }

  render() {
    return (
      <div>
        Dashboard
      </div>
    );
  }
}

export default connect(null, { fetchingUserData })(Dashboard);
