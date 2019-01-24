import React, { Component } from 'react';
import { } from 'react-router-dom'
import {
  Container,
  Divider,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'

class Footer extends Component {

  render() {
    return(
      <Segment inverted style={{ margin: '0px', height: '25vh'}}>
        <Container textAlign='center'>
          <Divider inverted section />
          <Image centered size='mini' src='https://i.imgur.com/Frwwd8f.png' />
          <Header as='h5' style={{ color:'white'}}>This Application Was Made By Robin Tram</Header>
        </Container>
      </Segment>
    )
  }
}


export default Footer
