import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import { loggingIn } from '../../redux/actions/login.js'
import { withRouter, Link } from 'react-router-dom'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  clearLoginState = () => {
    this.setState({
      username: '',
      password: ''
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = () => {
    let loginObject = {
      user: this.state
    }
    this.props.loggingIn(loginObject)
  }

  render() {
    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Icon name='sign-in' /> Log-in to your account
            </Header>
            {this.props.loginError.length > 0 ? <Header as='h4' color='red' textAlign='center'>
              <Icon name='hand spock outline' /> {this.props.loginError[0].message}
            </Header>
            : null
            }
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  name='username'
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  onChange={this.handleChange}
                  value={this.state.username}
                />
                <Form.Input
                  fluid
                  name='password'
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                  value={this.state.password}
                />

                <Button onClick={this.handleLogin} color='teal' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to='/signup'>Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loginError: state.loginError
  }
}

export default withRouter(connect(mapStateToProps, { loggingIn })(Login));
