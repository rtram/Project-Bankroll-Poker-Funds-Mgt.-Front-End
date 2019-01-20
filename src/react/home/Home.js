import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react'

import './Home.css'

const HomepageHeading = ({ mobile }) => (
  <Container >
    <Header
      as='h1'
      content='Project Bankroll'
      inverted
      style={{
        color: 'black',
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '1.8em',
        paddingTop: '1em'
      }}
    />
    <Header
      as='h2'
      content="We are here to help you start from nothing."
      inverted
      style={{
        color: 'black',
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

class DesktopContainer extends Component {

  render() {
    return (
      <Container
        className='home-segment'
      >
        <HomepageHeading />
      </Container >
    )
  }
}
export default DesktopContainer
