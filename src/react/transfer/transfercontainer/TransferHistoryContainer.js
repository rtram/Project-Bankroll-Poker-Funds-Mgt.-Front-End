import React, { Component } from 'react';
import { Container, Header, Grid, Segment } from 'semantic-ui-react'

// CONTAINER IMPORTS
import Transfer from './Transfer.js'

class TransferHistoryContainer extends Component {

  // RETURNS THE MOST RECENT 25 TRANSFER OBJECTS
  last25Transfers = (arr) => {
    let sortedTransactions;
    let last25Transfers;

    sortedTransactions = arr.sort((a,b) => {
      let sessionA = new Date(a.date)
      let sessionB = new Date(b.date)
      return sessionB - sessionA
    })

    last25Transfers = sortedTransactions.slice(0, 25)
    return last25Transfers
  }

  render() {

    return (
      <div >
        <Container fluid>
          <Header as='h2'>Transfer History</Header>
          <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
              <Grid.Row textAlign='center'>
                <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                  <Header as='h4'>SENT TRANSFERS</Header>
                  <br />
                  {this.props.sent_transactions.length > 0 ? this.last25Transfers(this.props.sent_transactions).map(transfer => (
                    <Transfer transfer={transfer}/>)): 'Nothing to See Here'
                  }
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                  <Header as='h4'>RECEIVED TRANSFERS</Header>
                  <br />
                  {this.props.received_transactions.length > 0 ? this.last25Transfers(this.props.received_transactions).map(transfer => (
                    <Transfer transfer={transfer}/>)): 'Nothing to See Here'
                  }
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default TransferHistoryContainer;
