import React, { Component } from 'react';
import { connect } from 'react-redux'
import './dashboard.css';

import { fetchingUserData } from '../../redux/actions/users.js'
import WinningPercentage from './winningpercentage'

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchingUserData()
  }


  // RETURNS AN ARRAY OF WINNING SESSION COUNT AND LOSING SESSIONS COUNT
  winLossPercentage = () => {
    let winCount = 0
    let lossCount = 0
    for (let i = 0; i < this.props.sessions.length; i++) {
      if (this.props.sessions[i].amount > 0) {
        winCount++
      } else {
        lossCount++
      }
    }
    let winningPercentageData = [winCount, lossCount]
    return winningPercentageData
  }

  render() {
    let winningPercentageData;
    if (this.props.sessions) {
      winningPercentageData = this.winLossPercentage()
    }

    return (
      <div>
        <WinningPercentage data={winningPercentageData}/>
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
