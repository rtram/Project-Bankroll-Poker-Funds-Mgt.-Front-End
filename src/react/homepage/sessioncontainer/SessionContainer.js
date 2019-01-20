import React, { Component } from 'react';

import { Header, Grid } from 'semantic-ui-react'

// CONTAINER IMPORTS
import SessionTable from './SessionTable'
import SessionForm from './SessionForm'

class SessionContainer extends Component {

  render() {
    return (
      <Grid>
        <Grid.Row fluid>
          <Grid.Column
            floated='left'
            width={8}
          >
            <Header as='h2'>Track Your Latest Session</Header>
            <SessionForm />
          </Grid.Column>
          <Grid.Column
            floated='right'
            width={7}
          >
            <Header as='h2'>Session History</Header>
            <SessionTable />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}


export default SessionContainer
