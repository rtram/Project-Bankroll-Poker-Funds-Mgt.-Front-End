import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Header, Grid, Segment } from 'semantic-ui-react'
import UserCard from './UserCard.js'

class UserList extends Component {

  render() {
    return(
      <Container>
        People You Might Know
        {this.props.userList ? this.props.userList.map(user => (
          <UserCard user={user} />
        )) : null}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    userList: state.userList
  }
}

export default connect(mapStateToProps, { })(UserList);
