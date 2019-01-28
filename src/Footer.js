import React, { Component } from 'react';
import {
  Container,
  Divider,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'

class Footer extends Component {

  render() {
    let css = {
      position: 'relative',
      height: '25vh',
      clear: 'both'
    }

    return(
      <Segment inverted style={css}>
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
