import React, { Component } from 'react';
import { connect } from 'react-redux'

class SessionForm extends Component {

  render() {
    return (
      <div>
        Session Form

      </div>
    )
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

export default connect(mapStateToProps)(SessionForm);
