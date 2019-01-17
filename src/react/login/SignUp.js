import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Terms from './Terms.js'

import { creatingUser } from '../../redux/actions/users.js'

import { Form, Button, Checkbox, Header } from 'semantic-ui-react'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      username:'',
      first_name: '',
      last_name: '',
      password: '',
      password_confirmation: '',
      agree: false,
      termsAndCondition: false,
      signup: false,
    }
  }

  clearFormState = () => {
    this.setState({
      username:'',
      first_name: '',
      last_name: '',
      password: '',
      password_confirmation: '',
      agree: false,
      termsAndCondition: false,
      signup: false
    })
  }

  // SETS STATE ONCHANGE OF FORM INPUT FORMS
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  toggleTerms = () => {
    this.setState({
      termsAndCondition: !this.state.termsAndCondition
    })
  }

  toggleAgree = event => {
    this.setState({
      agree: !this.state.agree,
      signup: !this.state.signup
    })
  }

  onSubmit = () => {
    let userObject = {
      username:this.state.username,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      balance: 0
    }
    this.props.creatingUser(userObject)
    this.clearFormState()
  }

  displayErrors = (errorArray) => {
    this.setState({
      errorMessages: errorArray
    })
  }

  render() {

    return (
      <Fragment>
        <Header as='h1'>Sign Up</Header>
        {this.props.errors ? <p style={{color: 'red'}}>{this.props.errors.errors}</p> : null}
        <Form onSubmit={this.onSubmit}>
          <Form.Field required>
            <label>Username</label>
            <input
              name='username'
              type='text'
              placeholder='Username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>First Name</label>
            <input
              name='first_name'
              type='text'
              placeholder='First Name'
              value={this.state.first_name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Last Name</label>
            <input
              name='last_name'
              type='text'
              placeholder='Last Name'
              value={this.state.last_name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Confirm Password</label>
            <input
              name='password_confirmation'
              type='password'
              placeholder='Confirm Your Password'
              value={this.state.password_confirmation}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field required>

          {this.state.termsAndCondition ? <Terms onClick={this.toggleTerms} />: <Button onClick={this.toggleTerms}>Click Here to See Terms & Conditions</Button>}
          <br/><br/>

          <Checkbox label='I agree to the Terms and Conditions' checked={this.state.agree} onChange={this.toggleAgree} />
          </Form.Field>
          {this.state.signup ? <Button onClick={this.onSubmit}>Sign Up</Button> : <Button disabled>Sign Up</Button>}
        </Form>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps, { creatingUser })(SignUp);
