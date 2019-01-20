import React from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'


const Hourly = (props) => (
  <div>
    <Container center>
      <Header as='h2' icon>
        <Icon name='hourglass'/>
        Hourly
      </Header>
      <Header as='h3'>
        You On Average Make <strong>${props.data}</strong> an Hour.
      </Header>
    </Container>
  </div>
)

export default Hourly
