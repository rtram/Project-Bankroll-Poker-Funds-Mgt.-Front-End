import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Dashboard.css';
import { Container, Grid, Header, Icon, Divider } from 'semantic-ui-react'
import { fetchingSessions } from '../../redux/actions/users.js'

// GRAPH IMPORTS
import WinningPercentage from './WinningPercentage'
import OverTime from './OverTime'
import Hourly from './Hourly'

// SESSION PANE IMPORT
import SessionContainer from './sessioncontainer/SessionContainer'


class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchingSessions(localStorage.getItem('currentUser'))

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

    overTimeDataPoints={
      '30days': monthValues,
      '12weeks': quarterValues,
      '12months': yearValues
    }
    return overTimeDataPoints
  }

  // RETURNS HOURLY FLOAT ROUNDED TO THE NEAREST TWO DECIMAL PLACE
  hourlyCalculator = () => {
    const sessionsArr = this.props.sessions
    let totalAmount;
    let totalHours;

    let amountObjectArr = sessionsArr.map(session => session.amount)
    let hourObjectArr = sessionsArr.map(session => session.hours)

    const reducer = (sum, currentValue) => sum + currentValue
    totalAmount = amountObjectArr.reduce(reducer, 0)
    totalHours = hourObjectArr.reduce(reducer, 0)

    let hourly = totalAmount/totalHours
    let twoDecimalHourly = Math.round(hourly * 100) / 100

    return twoDecimalHourly
  }

  render() {
    let currentUserFirstName;

    if (this.props.sessions.length > 0) {
      currentUserFirstName = this.props.sessions[0].user.first_name
    }

    return (
      <div>
        <Container style={{ marginTop: '15em' }}>
          <Header style={{ fontSize:'4em' }}>Welcome Back, {currentUserFirstName}</Header>
        </Container>
        <Grid style={{ marginTop: '5em' }} columns={2}>
          <Grid.Row>
            <Grid.Column width={8}>
            <Header style={{}} as='h1' icon >
              <Icon name='chart line' circular={true} color='red'/>
              Performance
            </Header>
            <p>This detailed graph shows how you have been performing over a period time.  Use the buttons beneath to see the peaks and valleys of your poker career!</p>
            {this.props.sessions ? <OverTime labels={this.createOverTimeLabels()} data={this.overTimeDataPoints()}/> : null}
            </Grid.Column>

            <Grid.Column style={{ marginRight: '3em'}} width={7}>
            <Header style={{}} as='h1' icon>
              <Icon name='percent' circular={true} color='green'/>
              Win Rate
            </Header>
            {this.props.sessions ?
              <WinningPercentage data={this.winLossPercentage()}/> : null}
            </Grid.Column>
          </Grid.Row>
          <Divider/>
          <Grid.Row>
            <Container
              style={{

              }}
            >
            {this.props.sessions ? <Hourly data={this.hourlyCalculator()}/> : null}
            </Container>
          </Grid.Row>
          <Divider/>
          <Grid.Row>
            <SessionContainer />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sessions: state.sessions,
  }
}

export default connect(mapStateToProps, { fetchingSessions })(Dashboard);
