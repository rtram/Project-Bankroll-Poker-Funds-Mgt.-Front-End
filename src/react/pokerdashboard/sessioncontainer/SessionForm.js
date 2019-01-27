import React, { Component } from 'react';
import { connect } from 'react-redux'

import { postingSession } from '../../../redux/actions/sessions.js'

import { Form, Button, Header } from 'semantic-ui-react'

class SessionForm extends Component {
  constructor() {
    super()
    this.state = {
      date:'',
      location: '',
      hours: '',
      buyin: '',
      cashout: '',
      amount: ''
    }
  }

  clearFormState = () => {
    this.setState({
      date:'',
      location: '',
      hours: '',
      buyin: '',
      cashout: '',
      amount: ''
    })
  }

  // SETS STATE ONCHANGE OF FORM INPUT FORMS
  handleChange = event => {
    if (event.target.name === 'buyin') {
      let amount = this.state.cashout - event.target.value
      this.setState({
        [event.target.name]: event.target.value,
        amount: amount
      })
    } else if (event.target.name === 'cashout') {
        let amount = event.target.value - this.state.buyin
        this.setState({[event.target.name]: event.target.value,
        amount: amount
        })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  onSubmit = event => {
    event.preventDefault()

    let sessionObject = {
      date: this.state.date,
      location: this.state.location,
      hours: this.state.hours,
      amount: this.state.amount,
      user_id: this.props.currentUser
    }
    this.clearFormState()
    this.props.postingSession(sessionObject)
  }



  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        {this.props.sessionError.length > 0 ? <Header as='h4' color='red' textAlign='center'>
          {this.props.sessionError.map(error => <p>{error}</p>)}
        </Header>
        : null
        }
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
        <Button type='submit' color='blue'>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    sessions: state.sessions,
    sessionError: state.sessionError
  }
}

export default connect(mapStateToProps, { postingSession })(SessionForm);
