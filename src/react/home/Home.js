import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Responsive,
  Segment
} from 'semantic-ui-react'

import './Home.css'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({ mobile }) => (
  <Container >
    <Header
      as='h1'
      content='Project Bankroll'
      inverted
      style={{
        color: 'black',
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content="Started from the Bottom, Now We're Here"
      inverted
      style={{
        color: 'black',
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button size='huge' color='teal'>
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
