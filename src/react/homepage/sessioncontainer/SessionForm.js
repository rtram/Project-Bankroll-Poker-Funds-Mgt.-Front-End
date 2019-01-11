import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Form, Button } from 'semantic-ui-react'

class SessionForm extends Component {
  constructor() {
    super()
    this.state = {
      date:'',
      location: '',
      hours: null,
      buyin: null,
      cashout: null,
      amount: null
    }
  }

  handleChange = event => {
    if (event.target.name === 'buyin') {
      let amount = event.target.value - this.state.cashout
      this.setState({
        [event.target.name]: event.target.value,
        amount: amount
      })
    } else if (event.target.name === 'cashout') {
        let amount = this.state.buyin - event.target.value
        this.setState({[event.target.name]: event.target.value,
        amount: amount
        })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Field width={5}>
            <label>Date</label>
            <input
              name='date'
              type='date'
              placeholder='Date...'
              value={this.state.date}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field width={11}>
            <label>Location</label>
            <input
              name='location'
              placeholder='Location...'
              value={this.state.location}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field>
            <label>Hours</label>
            <input
              name='hours'
              type='number'
              step='.5'
              placeholder='Hours Played...'
              value={this.state.hours}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Bought In</label>
            <input
              name='buyin'
              type='number'
              min='0'
              placeholder='$'
              value={this.state.buyin}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Cashed Out</label>
            <input
              name='cashout'
              type='number'
              min='0'
              placeholder='$'
              value={this.state.cashout}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(null, mapDispatchToProps)(SessionForm);
