import React, { Component } from 'react';
import { connect } from 'react-redux'
import './dashboard.css';

import { fetchingUserData } from '../../redux/actions/users.js'
import WinningPercentage from './winningpercentage'
import OverTime from './overtime'

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

  // RETURNS AN OBJECT W/ ARRAYS OF THE LAST 30, 90, AND 365 DAYS
  createOverTimeLabels = () => {
    let moment = require('moment')
    let overTimeLabels = {}

    let last30DayArray = []

    for (let i = 0; i < 30; i++) {
      let day = moment().subtract(i, 'days').format('l')
      last30DayArray.push(day)
    }

    let last12WeekArray = []

    for (let i = 0; i < 12; i++) {
      let week = moment().subtract(i, 'weeks').format('l')
      last12WeekArray.push(week)
    }

    let last12MonthArray = []

    for (let i = 0; i < 12; i++) {
      let month = moment().subtract(i, 'months').format('l')
      last12MonthArray.push(month)
    }

    overTimeLabels = {
      '30days': last30DayArray,
      '12weeks': last12WeekArray,
      '12months': last12MonthArray
    }

    return overTimeLabels
  }

  render() {
    let winningPercentageData;
    if (this.props.sessions) {
      winningPercentageData = this.winLossPercentage()
    }

    return (
      <div>
        <OverTime labels={this.createOverTimeLabels()}/>
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
