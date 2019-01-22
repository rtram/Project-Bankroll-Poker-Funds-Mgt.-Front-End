import React from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'
import './Dashboard.css'

const Hourly = (props) => (
  <div>
    <Container center>
      <Header as='h2' icon>
        <Icon name='hourglass' circular={true} color='yellow'/>
        Hourly
      </Header>
      <Header as='h3'>
        You On Average Make ${props.data > 0 ?
          <h1 className='positive-hourly'>${props.data}</h1> :
          <h1 className='negative-hourly'>${props.data}</h1>} an Hour.
      </Header>
    </Container>
  </div>
)

export default Hourly
