import React, { Component } from 'react';
import RequestContainer from './RequestContainer'
import { Container } from 'semantic-ui-react'

export default class InboxContainer extends Component {


  render() {
    return(
      <Container
        style={{
          marginTop: '15em',
          marginBottom: '10em'
        }}
      >
        <RequestContainer />
      </Container>
    )
  }
}
