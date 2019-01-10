import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'

export default class WinningPercentage extends Component {

  render() {

    let dataObject = {
      data: {
          labels: ['Winning sessions', 'Losing Sessions'],
          datasets: [{
              label: 'Win Loss Percentage',
              // CHANGE THIS KEY/VALUE TO DISPLAY DATA POINTS
              data: this.props.data,
              backgroundColor: [
                  'rgba(0, 255, 0, .4)',
                  'rgba(255, 0, 0, .4)',
              ],
              borderColor: [
                'green',
                'red'
              ],
              borderWidth: 1
          }]
      }
    }

    let winCount;
    let lossCount;
    let winningPercentage;

    if (this.props.data) {
      winCount = this.props.data[0]
      lossCount = this.props.data[1]
      winningPercentage = (winCount/(winCount + lossCount))
    }

    return (
      <div>
        {this.props.data ? <div>You win {parseInt(winningPercentage * 100)}% of the time</div> : null}
        <Doughnut
          data={dataObject.data}
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
      </div>
    )
  }
}
