import React, { Component } from 'react';
import { } from 'react-router-dom'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'

class Footer extends Component {

  render() {
    return(
      <Segment inverted style={{ margin: '0px'}}>
        <Container textAlign='center'>
          <Divider inverted section />
          <Image centered size='mini' src='/logo.png' />
          <List horizontal inverted divided link size='small'>
            <List.Item as='a' href='#'>
              Site Map
            </List.Item>
            <List.Item as='a' href='#'>
              Contact Us
            </List.Item>
            <List.Item as='a' href='#'>
              Terms and Conditions
            </List.Item>
            <List.Item as='a' href='#'>
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    )
  }
}


export default Footer
