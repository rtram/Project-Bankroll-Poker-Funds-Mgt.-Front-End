import React, { Component } from 'react';


import { Container, Header } from 'semantic-ui-react'


// CONTAINER IMPORTS
import SessionTable from './SessionTable'
import SessionForm from './SessionForm'

class SessionContainer extends Component {

  render() {
    return (
      <div>
        <Container fluid>
        <Header as='h2'>Sessions History</Header>
          <SessionForm />
          <SessionTable />
        </Container>
      </div>
    )
  }

}


export default SessionContainer
