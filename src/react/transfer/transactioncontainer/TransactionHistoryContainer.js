import React, { Component } from 'react';
import { Container, Header, Grid, Segment, Icon } from 'semantic-ui-react'

// CONTAINER IMPORTS
import Transaction from './Transaction.js'

class TransactionHistoryContainer extends Component {

  // RETURNS THE MOST RECENT 10 TRANSFER OBJECTS
  last10Transfers = (arr) => {
    let sortedTransactions;
    let last10Transfers;

    sortedTransactions = arr.sort((a,b) => {
      let sessionA = new Date(a.date)
      let sessionB = new Date(b.date)
      return sessionB - sessionA
    })

    last10Transfers = sortedTransactions.slice(0, 10)
    return last10Transfers
  }

  render() {
    return (
      <Container style={{ marginTop: '5em'}} fluid>
        <Header as='h2'>Transfer History</Header>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                <Icon name='minus' color='red' size='huge'/>
                <Header as='h4'>SENT TRANSFERS</Header>
                <br />
                {this.props.sent_transactions.length > 0 ? this.last10Transfers(this.props.sent_transactions).map(transfer => (
                  <Transaction transfer={transfer}/>)):
                    'Nothing to See Here'
                }
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                <Icon name='plus' color='green' size='huge'/>
                <Header as='h4'>RECEIVED TRANSFERS</Header>
                <br />
                {this.props.received_transactions.length > 0 ? this.last10Transfers(this.props.received_transactions).map(transfer => (
                  <Transaction transfer={transfer}/>)): 'Nothing to See Here'
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    )
  }
}

export default TransactionHistoryContainer;
