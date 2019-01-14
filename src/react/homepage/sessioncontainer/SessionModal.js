import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatingSession, deletingSession } from '../../../redux/actions/sessions.js'

import { Button, Modal, Icon, Form } from 'semantic-ui-react'

class SessionModal extends Component {
  constructor() {
    super()
    this.state = {
      id:'',
      date:'',
      location: '',
      hours: '',
      amount: '',

      open:false
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.session.id,
      date: this.props.session.date,
      location: this.props.session.location,
      hours: this.props.session.hours,
      amount: this.props.session.amount
    })
  }

  // SETS STATE ONCHANGE OF FORM INPUT FORMS
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUpdate = () => {
    this.props.updatingSession(this.state)

    this.handleToggle()
  }

  handleDelete = () => {
    this.props.deletingSession(this.state)

    this.handleToggle()
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return(
      <Modal open={this.state.open} size='large' trigger={<Button onClick={this.handleToggle}>Edit</Button>}>
        <Modal.Header>Edit Transaction</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.onSubmit}>
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
                <label>Won/Loss</label>
                <input
                  name='amount'
                  type='number'
                  placeholder='$'
                  value={this.state.amount}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleUpdate}><Icon name='save'/>Save</Button>
          <Button color='red' onClick={this.handleDelete}> <Icon name='trash'/> Delete</Button>
          <Button color='grey' onClick={this.handleToggle}><Icon name='cancel'/>Cancel</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}


export default connect(null, { updatingSession, deletingSession })(SessionModal)
