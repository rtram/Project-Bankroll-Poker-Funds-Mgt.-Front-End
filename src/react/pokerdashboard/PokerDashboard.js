import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../App.css'
import './Dashboard.css';
import { Container, Grid, Header, Icon, Divider } from 'semantic-ui-react'
import { fetchingSessions } from '../../redux/actions/users.js'
import { fetchingUserBalances } from '../../redux/actions/users.js'

// GRAPH IMPORTS
import WinningPercentageDoughnutGraph from './WinningPercentageDoughnutGraph'
import OverTimeLineGraph from './OverTimeLineGraph'
import Hourly from './Hourly'

// SESSION PANE IMPORT
import SessionContainer from './sessioncontainer/SessionContainer'

let moment = require('moment')

class PokerDashboard extends Component {
  componentDidMount() {
    this.props.fetchingSessions(localStorage.getItem('currentUser'))
    this.props.fetchingUserBalances(localStorage.getItem('currentUser'))
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

  // RETURNS DATE ARRAY SORTED FROM OLDEST DATE FIRST TO MOST CURRENT DATE LAST
  dateSorter = (arr) => (
    arr.sort((a,b) => {
       let dateA = new Date(a)
       let dateB = new Date(b)
       return (dateA - dateB)
       }
     )
  )

  thirtyDayLabels = () => {
    let last30DayArray = []
    for (let i = 0; i < 30; i++) {
      let day = moment().subtract(i, 'days').format('l')
      last30DayArray.push(day)
    }
    return last30DayArray
  }

  twelveWeekLabels = () => {
    let last12WeekArray = []
    for (let i = 0; i < 12; i++) {
      let week = moment().subtract(i, 'weeks').format('l')
      last12WeekArray.push(week)
    }
    return last12WeekArray
  }

  twelveMonthLabels = () => {
    let last12MonthArray = []
    for (let i = 0; i < 12; i++) {
      let month = moment().subtract(i, 'months').format('l')
      last12MonthArray.push(month)
    }
    return last12MonthArray
  }

  // RETURNS AN OBJECT W/ ARRAYS OF THE LAST 30, 90, AND 365 DAYS
  createOverTimeLabels = () => {
    let last30DayArray = this.dateSorter(this.thirtyDayLabels())
    let last12WeekArray = this.dateSorter(this.twelveWeekLabels())
    let last12MonthArray = this.dateSorter(this.twelveMonthLabels())

    let overTimeLabels = {
      '30days': last30DayArray,
      '12weeks': last12WeekArray,
      '12months': last12MonthArray
    }

    return overTimeLabels
  }

  // RETURNS ALL SESSION OBJECTS BETWEEN START AND END DATE
  filterSessions = (startDate, endDate) => (
    this.props.sessions.filter(session => {
      let sessionDate = new Date(session.date)
      return (sessionDate >= startDate && sessionDate <= endDate)
    })
  )

  arrayReducer = (arr) => {
    const reducer = (sum, currentValue) => sum + currentValue
    return arr.reduce(reducer, 0)
  }

  getRunningTotal = (datesArr) => {
    let dateValues = []

    // POPULATES monthValues ARRAY W/ RUNNING TOTAL PER DATE
    for (let i = 0; i < datesArr.length ; i++) {
      let startDate = new Date(datesArr[0])
      let endDate = new Date(datesArr[i])

      let filteredSessions = this.filterSessions(startDate, endDate)

      // RETURNS ARRAY WITH RUNNING TOTAL PER DATE
      let mappedSessionTotals = filteredSessions.map(session => session.amount)
      let dateSum = this.arrayReducer(mappedSessionTotals)

      dateValues.push(parseInt(dateSum))
    }
    return dateValues
  }

  // RETURNS AN OBJECT W/ ARRAYS TRACKING THE TOTAL FOR THE 30, 90, 365 DAYS
  overTimeDataPoints = () => {
    let overTimeLabels = this.createOverTimeLabels()

    let monthDates = overTimeLabels['30days']
    let quarterDates = overTimeLabels['12weeks']
    let yearDates = overTimeLabels['12months']

    let monthValues = this.getRunningTotal(monthDates)
    let quarterValues = this.getRunningTotal(quarterDates)
    let yearValues = this.getRunningTotal(yearDates)

    let overTimeDataPoints = {
      '30days': monthValues,
      '12weeks': quarterValues,
      '12months': yearValues
    }
    return overTimeDataPoints
  }

  calculateHourlyAmountTotal = () => {
    let amountObjectArr = this.props.sessions.map(session => session.amount)
    return this.arrayReducer(amountObjectArr)
  }

  calculateHourlyHourTotal = () => {
    let hourObjectArr = this.props.sessions.map(session => session.hours)
    return this.arrayReducer(hourObjectArr)
  }

  // RETURNS HOURLY FLOAT ROUNDED TO THE NEAREST TWO DECIMAL PLACE
  hourlyCalculator = () => {
    let totalAmount = this.calculateHourlyAmountTotal()
    let totalHours = this.calculateHourlyHourTotal()

    let hourly = totalAmount/totalHours
    let twoDecimalHourly = Math.round(hourly * 100) / 100

    return twoDecimalHourly
  }

  render() {

    return (
      <div class='body margin-top'>
        <Header style={{ fontSize:'4em', color:'white'}}>
          Welcome Back, {this.props.user.first_name}
        </Header>
        <Grid style={{ marginTop: '3em' }} columns={2}>
          <Grid.Row>
            <Grid.Column width={8}>
            <Header style={{}} as='h1' icon >
              <Icon name='chart line' circular={true} color='red'/>
              Performance
            </Header>
            <p>This detailed graph shows how you have been performing over a period time.  Use the buttons beneath to see the peaks and valleys of your poker career!</p>
            {this.props.sessions ? <OverTimeLineGraph labels={this.createOverTimeLabels()} data={this.overTimeDataPoints()}/> : null}
            </Grid.Column>

            <Grid.Column style={{ marginRight: '3em'}} width={7}>
            <Header style={{}} as='h1' icon>
              <Icon name='percent' circular={true} color='green'/>
              Win Rate
            </Header>
            {this.props.sessions ?
              <WinningPercentageDoughnutGraph data={this.winLossPercentage()}/> : null}
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
    user: state.user
  }
}

export default connect(mapStateToProps, { fetchingSessions, fetchingUserBalances })(PokerDashboard);
