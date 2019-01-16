import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Header, Grid, Segment } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

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
                  SENT TRANSFERS
                  {this.props.sent_transactions ? this.last25Transfers(this.props.sent_transactions).map(transfer => (
                    <Transfer transfer={transfer}/>)): null
                  }
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                  RECEIVED TRANSFERS
                  {this.props.received_transactions ? this.last25Transfers(this.props.received_transactions).map(transfer => (
                    <Transfer transfer={transfer}/>)): null
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

const mapStateToProps = state => {
  return {
    first_name: state.first_name,
    last_name: state.last_name,
    sent_transactions: state.sent_transactions,
    received_transactions: state.received_transactions
  }
}

export default withRouter(connect(mapStateToProps)(TransferHistoryContainer))
