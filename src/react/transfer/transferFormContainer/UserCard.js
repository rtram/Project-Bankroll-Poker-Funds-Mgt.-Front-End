import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

export default class UserCard extends Component {

  render() {
    return(
      <Card>
        <Card.Content>
          <Card.Header>{this.props.user.first_name} {this.props.user.last_name}</Card.Header>
          <Card.Meta>
            <span>{this.props.user.username}</span>
          </Card.Meta>
          <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    )
  }
}
