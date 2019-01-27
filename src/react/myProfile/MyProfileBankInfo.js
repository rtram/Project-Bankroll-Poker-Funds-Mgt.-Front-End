import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Icon, Header } from 'semantic-ui-react'

class MyProfileBankInfo extends Component {

  // RETURNS OBJECT'S FULL NAME STRING
  fullNameConverter = (object) => {
    return this.props.user.first_name + ' ' + this.props.user.last_name
  }

  render() {
    return (
      <Container
        style={{
          marginTop: '5em',
          marginBottom: '25vh',
        }}
      >
        <Header as='h2'>
          Bank Information
        </Header>
        <Icon name='cogs' size='huge'/>
        <Header as='h3'>
          Under Construction Come Back Later!
        </Header>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(MyProfileBankInfo)
