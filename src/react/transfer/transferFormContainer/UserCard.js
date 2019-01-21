import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, Icon, Button, Grid, Image } from 'semantic-ui-react'
import { fetchingSelectedProfile } from '../../../redux/actions/users.js'

class UserCard extends Component {

  handleClick = () => {
    this.props.fetchingSelectedProfile(this.props.user)
  }

  render() {
    return(
      <Grid.Column>
        <Card>
          <Card.Content>
            <Image
              src='https://www.aminz.org.nz/themes/portal/uploads/profile-default-large.jpg'
              size='small'
              style={{
                marginBottom: '2em'
              }}
            />
            <Card.Header><Icon name='user' /> {this.props.user.first_name} {this.props.user.last_name}</Card.Header>
            <Card.Meta>
              <span>Username: {this.props.user.username}</span>
            </Card.Meta>
            <Card.Description></Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button onClick={this.handleClick}>Profile</Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }
}

export default connect(null, { fetchingSelectedProfile })(UserCard);
