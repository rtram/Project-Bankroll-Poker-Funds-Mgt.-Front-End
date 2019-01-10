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

    // RETURNS DATE ARRAY SORTED FROM OLDEST DATE FIRST TO MOST CURRENT DATE LAST
    function dateSorter(arr) {
      return arr.sort((a,b) => {
        let dateA = new Date(a)
        let dateB = new Date(b)
        return (dateA - dateB)
        }
      )
    }

    let last30DayArray = []
    for (let i = 0; i < 30; i++) {
      let day = moment().subtract(i, 'days').format('l')
      last30DayArray.push(day)
    }

    last30DayArray = dateSorter(last30DayArray)

    let last12WeekArray = []
    for (let i = 0; i < 12; i++) {
      let week = moment().subtract(i, 'weeks').format('l')
      last12WeekArray.push(week)
    }

    last12WeekArray = dateSorter(last12WeekArray)

    let last12MonthArray = []
    for (let i = 0; i < 12; i++) {
      let month = moment().subtract(i, 'months').format('l')
      last12MonthArray.push(month)
    }

    last12MonthArray = dateSorter(last12MonthArray)

    overTimeLabels = {
      '30days': last30DayArray,
      '12weeks': last12WeekArray,
      '12months': last12MonthArray
    }

    return overTimeLabels
  }

  // RETURNS AN OBJECT W/ ARRAYS TRACKING THE TOTAL FOR THE 30, 90, 365 DAYS
  overTimeDataPoints = () => {
    let overTimeDataPoints;
    let overTimeLabels = this.createOverTimeLabels()
    let userSessions = this.props.sessions

    function getRunningTotal(datesArr) {
      let dateValues = []

      // POPULATES monthValues ARRAY W/ RUNNING TOTAL PER DATE
      for (let i = 0; i < datesArr.length ; i++) {
        let startDate = new Date(datesArr[0])
        let endDate = new Date(datesArr[i])

        // RETURNS ALL SESSION OBJECTS BETWEEN START AND END DATE
        let filteredSessions = userSessions.filter(session => {
          let sessionDate = new Date(session.date)
          return (sessionDate >= startDate && sessionDate <= endDate)
        })

        // RETURNS ARRAY WITH RUNNING TOTAL PER DATE
        let mappedSessionTotals = filteredSessions.map(session => session.amount)

        const reducer = (sum, currentValue) => sum + currentValue
        let dateSum = mappedSessionTotals.reduce(reducer, 0)

        dateValues.push(parseInt(dateSum))
      }
      return dateValues
    }

    let monthDates = overTimeLabels['30days']
    let quarterDates = overTimeLabels['12weeks']
    let yearDates = overTimeLabels['12months']

    let monthValues = getRunningTotal(monthDates)
    let quarterValues = getRunningTotal(quarterDates)
    let yearValues = getRunningTotal(yearDates)

    console.log(quarterValues)

    overTimeDataPoints={
      '30days': monthValues,
      '12weeks': quarterValues,
      '12months': yearValues
    }

    return overTimeDataPoints
  }

  render() {

    return (
      <div>
        {this.props.sessions ? <OverTime labels={this.createOverTimeLabels()} data={this.overTimeDataPoints()}/> : null}
        {this.props.sessions ? <WinningPercentage data={this.winLossPercentage()}/> : null}
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
