import React, { Component } from 'react'

import { Container, Header } from 'semantic-ui-react'

class ProfileInformation extends Component {

  // RETURNS OBJECT'S FULL NAME STRING
  fullNameConverter = (object) => {
    return this.props.first_name + ' ' + this.props.last_name
  }

  render() {
    return (
      <div>
        {this.props ?
          <Container>
            <Header as='h1'>{this.fullNameConverter()}</Header>
            <Header as='h2'>Username: {this.props.username}</Header>
          </Container> : null}
      </div>
    )
  }
}

export default ProfileInformation
