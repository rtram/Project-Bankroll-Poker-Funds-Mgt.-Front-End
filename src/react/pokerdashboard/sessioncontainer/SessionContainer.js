import React, { Component } from 'react';
import { Header, Grid, Icon } from 'semantic-ui-react'

// CONTAINER IMPORTS
import SessionTable from './SessionTable'
import SessionForm from './SessionForm'

class SessionContainer extends Component {

  render() {
    return (
      <>
        <Grid
          style={{
            marginBottom: '5em'
          }}
        >
          <Grid.Row fluid>
            <Grid.Column
              floated='left'
              width={8}
            >
              <Header as='h1' icon>
                <Icon name='write square' circular={true}  color='blue'/>
                Session Entry
              </Header>
              <p>Enter information about your most recent session, or a session you forgot about in the past here.</p>
              <SessionForm />
            </Grid.Column>
            <Grid.Column
              style={{
                marginRight: '3em'
              }}
              floated='right'
              width={7}
            >
              <Header as='h1' icon>
                <Icon name='history' circular={true} color='brown'/>
                Session History
              </Header>
              <p>How have you performed the last 5 sessions?</p>
              <SessionTable />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }

}


export default SessionContainer
