import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Container, Header, Grid, Segment } from 'semantic-ui-react'
import ReceivedRequest from './ReceivedRequest'
import SentRequest from './SentRequest'

class RequestContainer extends Component {

  // RETURNS THE MOST RECENT 25 TRANSFER OBJECTS
  last25Requests = (arr) => {
    let sortedRequests;
    let last25Requests;

    sortedRequests = arr.sort((a,b) => {
      let requestA = new Date(a.date)
      let requestB = new Date(b.date)
      return requestB - requestA
    })

    last25Requests = sortedRequests.slice(0, 25)
    return last25Requests
  }

  render() {
    let recentSentRequests = this.last25Requests(this.props.sent_requests)
    let recentReceivedRequests = this.last25Requests(this.props.received_requests)
    return (
      <Container fluid
        style={{
          marginTop: '5em'
        }}
      >
        <Header as='h2'>Inbox</Header>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                <Header as='h4'>SENT REQUESTS</Header>
                <br />
                {recentSentRequests.length > 0 ? recentSentRequests.map(request => (
                  <SentRequest request={request}/>)): 'Nothing to See Here'
                }
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                <Header as='h4'>RECEIVED REQUESTS</Header>
                <br />
                {recentReceivedRequests.length > 0 ? recentReceivedRequests.map(request => (
                  <ReceivedRequest request={request}/>)): 'Nothing to See Here'
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    sent_requests: state.sent_requests,
    received_requests: state.received_requests
  }
}

export default withRouter(connect(mapStateToProps, { })(RequestContainer));
