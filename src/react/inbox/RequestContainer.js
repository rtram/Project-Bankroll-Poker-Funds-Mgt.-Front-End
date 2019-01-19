import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Container, Header, Grid, Segment } from 'semantic-ui-react'
import ReceivedRequest from './ReceivedRequest'
import SentRequest from './SentRequest'

// CONTAINER IMPORTS

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
      <div >
        <Container fluid>
          <Header as='h2'>Request Inbox</Header>
          <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
              <Grid.Row textAlign='center'>
                <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                  SENT REQUESTS
                  {recentSentRequests.length > 0 ? recentSentRequests.map(request => (
                    <SentRequest request={request}/>)): null
                  }
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                  RECEIVED REQUESTS
                  {recentReceivedRequests.length > 0 ? recentReceivedRequests.map(request => (
                    <ReceivedRequest request={request}/>)): null
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
    sent_requests: state.sent_requests,
    received_requests: state.received_requests
  }
}

export default withRouter(connect(mapStateToProps, {})(RequestContainer));
