import React, { Component } from 'react'

import SessionModal from './SessionModal.js'

import { Table } from 'semantic-ui-react'


class SessionRow extends Component {

  // RETURNS HOURLY FLOAT ROUNDED TO THE NEAREST TWO DECIMAL PLACE
  hourlyCalculator = () => {
    const amount = this.props.session.amount
    const hours = this.props.session.hours

    let hourly = amount/hours
    let twoDecimalHourly = Math.round(hourly * 100) / 100

    return twoDecimalHourly
  }

  // RETURNS INTEGER NUMBER TO FLOAT
  integerToFloat = (integer) => {
    let float = Math.round(integer * 100) / 100

    return float
  }

  render() {
    return(
      <Table.Row>
        <Table.Cell class='selectable'>{this.props.session.date}</Table.Cell>
        <Table.Cell>{this.props.session.location}</Table.Cell>
        <Table.Cell>{this.props.session.hours}</Table.Cell>
        <Table.Cell>${this.integerToFloat(this.props.session.amount)}</Table.Cell>
        <Table.Cell>${this.hourlyCalculator()}</Table.Cell>
        <SessionModal session={this.props.session}/>
      </Table.Row>
    )
  }
}



export default SessionRow
