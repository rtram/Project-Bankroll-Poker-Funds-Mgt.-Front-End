import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Header } from 'semantic-ui-react'
import './Dashboard.css'

let WinningPercentageDoughnutGraph = props => {
  let dataObject = {
    data: {
        labels: ['Winning sessions', 'Losing Sessions'],
        datasets: [{
            label: 'Win Loss Percentage',
            // CHANGE THIS KEY/VALUE TO DISPLAY DATA POINTS
            data: props.data,
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

  if (props.data) {
    winCount = props.data[0]
    lossCount = props.data[1]
    winningPercentage = (winCount/(winCount + lossCount))
  }

  return (
    <div>
      {props.data ? <Header as='h2'>You win {parseInt(winningPercentage * 100)}% of the sessions you play.</Header> : null}
      <Doughnut
        data={dataObject.data}
        width={300}
        height={200}
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

export default WinningPercentageDoughnutGraph
