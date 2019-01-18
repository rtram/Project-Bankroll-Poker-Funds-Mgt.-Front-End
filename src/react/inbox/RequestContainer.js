import React, { Component } from 'react';
import { Container, Header, Grid, Segment } from 'semantic-ui-react'

// CONTAINER IMPORTS

class RequestContainer extends Component {

  // RETURNS THE MOST RECENT 25 TRANSFER OBJECTS
  // last25Transfers = (arr) => {
  //   let sortedTransactions;
  //   let last25Transfers;
  //
  //   sortedTransactions = arr.sort((a,b) => {
  //     let sessionA = new Date(a.date)
  //     let sessionB = new Date(b.date)
  //     return sessionB - sessionA
  //   })
  //
  //   last25Transfers = sortedTransactions.slice(0, 25)
  //   return last25Transfers
  // }

  render() {

    return (
      <div >
        <Container fluid>
          <Header as='h2'>Transfer History</Header>
          <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
              <Grid.Row textAlign='center'>
                <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                  SENT REQUESTS

                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                  RECEIVED REQUESTS

                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default RequestContainer;
