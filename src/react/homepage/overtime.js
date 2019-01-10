import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { Button } from 'semantic-ui-react'

export default class OverTime extends Component {
  constructor() {
    super()
    this.state = {
      // CAN DISPLAY '30 days', '12 weeks', and '12 months'
      display: '30 days'
    }
  }

  toggle30Days = () => {
    this.setState({
      display: '30 days'
    })
  }

  toggle12Weeks = () => {
    this.setState({
      display: '12 weeks'
    })
  }

  toggle12Months = () => {
    this.setState({
      display: '12 months'
    })
  }

  render() {

    let last30Days = {
      data: {
          labels: this.props.labels['30days'],
          datasets: [{
              label: 'Money Spent',
              // CHANGE 'DATA' TO DISPLAY DATA POINTS
              data: [...Array(30).keys()],
              backgroundColor: [
                  'rgba(0, 255, 0, .4)',
              ],
              borderColor: [
                  'green',
              ],
              borderWidth: 1
          }]
      }
    }

    let last12Weeks = {
      data: {
          labels: this.props.labels['12weeks'],
          datasets: [{
              label: 'Money Spent',
              // CHANGE 'DATA' TO DISPLAY DATA POINTS
              data: [...Array(12).keys()],
              backgroundColor: [
                  'rgba(0, 255, 0, .4)',
              ],
              borderColor: [
                  'green',
              ],
              borderWidth: 1
          }]
      }
    }

    let last12Months = {
      data: {
          labels: this.props.labels['12months'],
          datasets: [{
              label: 'Money Spent',
              // CHANGE 'DATA' TO DISPLAY DATA POINTS
              data: [...Array(12).keys()],
              backgroundColor: [
                  'rgba(0, 255, 0, .4)',
              ],
              borderColor: [
                  'green',
              ],
              borderWidth: 1
          }]
      }
    }

    return (
      <div>

        {this.state.display === '30 days' ?
          <Line
            data={last30Days.data}
            width={750}
            height={500}
            options={{
              title: {
                text: 'Session Winning Percentage',
                display: true,
                fontsize: 200
              },
              legend: {
                display: true,
                position: "bottom"
              }
            }}
          /> : null}

        {this.state.display === '12 weeks' ?
        <Line
          data={last12Weeks.data}
          width={750}
          height={500}
          options={{
            title: {
              text: 'Session Winning Percentage',
              display: true,
              fontsize: 200
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }}
        />
        : null}

        {this.state.display === '12 months' ?
        <Line
          data={last12Months.data}
          width={750}
          height={500}
          options={{
            title: {
              text: 'Session Winning Percentage',
              display: true,
              fontsize: 200
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }}
        /> : null}

        <Button onClick={this.toggle30Days}>30 Days</Button>
        <Button onClick={this.toggle12Weeks}>3 Months</Button>
        <Button onClick={this.toggle12Months}>1 Year</Button>
      </div>
    )
  }
}
