import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'

export default class WinningPercentage extends Component {

  render() {

  let dataObject = {
    data: {
        labels: ['Wins', 'Losses'],
        datasets: [{
            label: 'Money Spent',
            data: [50, 50],
            backgroundColor: [
                'rgba(230, 25, 75, .4)',
                'rgba(245, 130, 48, .4)',
                'rgba(255, 225, 25, .4)',
                'rgba(210, 245, 60, .4)',
                'rgba(60, 180, 75, .4)',
                'rgba(70, 240, 240, .4)',
                'rgba(0, 130, 200, .4)',
                'rgba(145, 30, 180, .4)',
                'rgba(240, 50, 230, .4)',
                'rgba(128, 128, 128, .4)'
            ],
            borderColor: [
                'red',
                'orange',
                'yellow',
                'lime',
                'green',
                'cyan',
                'blue',
                'purple',
                'magenta',
                'grey'
            ],
            borderWidth: 1
        }]
    }
  }

    return (
      <div>
        WinningPercentage
        <Doughnut
          data={dataObject.data}
          width={750}
          height={500}
          options={{
            title: {
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
