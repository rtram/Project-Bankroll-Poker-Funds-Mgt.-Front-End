import React from 'react'
import { Container, Header } from 'semantic-ui-react'


const Hourly = (props) => (
  <div>
    <Container center>
      <Header as='h2'>Hourly</Header>
      You On Average Make <strong>${props.data}</strong> an Hour.
    </Container>
  </div>
)

export default Hourly
