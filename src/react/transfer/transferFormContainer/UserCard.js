import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ProfilePageContainer from '../profilePage/ProfilePageContainer.js'
import { fetchingSelectedProfile } from '../../../redux/actions/users.js'

class UserCard extends Component {

  handleClick = () => {
    this.props.fetchingSelectedProfile(this.props.user)
  }

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
        <Card.Content extra>
          <Icon name='expand'/>
          <Button onClick={this.handleClick}>Profile</Button>
        </Card.Content>
      </Card>
    )
  }
}

export default connect(null, { fetchingSelectedProfile })(UserCard);
