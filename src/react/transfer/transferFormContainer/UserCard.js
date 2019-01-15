import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react'

export default class UserCard extends Component {

  render() {
    return(
      <Card>
        <Card.Content>
          <Card.Header><Icon name='user' /> {this.props.user.first_name} {this.props.user.last_name}</Card.Header>
          <Card.Meta>
            <span>Username: {this.props.user.username}</span>
          </Card.Meta>
          <Card.Description></Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
