import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Image } from 'semantic-ui-react'

class UserProfile extends Component {

  // RETURNS OBJECT'S FULL NAME STRING
  fullNameConverter = (object) => {
    return this.props.user.first_name + ' ' + this.props.user.last_name
  }

  render() {
    return (
      <div>
        {this.props ?
          <Container>
            <Container style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '50%',
            }}>
              <Image
                src='https://www.aminz.org.nz/themes/portal/uploads/profile-default-large.jpg'
                size='small'
                style={{
                  marginBottom: '2em',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '50%',
                }}
              />
            </Container>
            <Header as='h1'>{this.fullNameConverter()}</Header>
            <Header as='h2'>Username: {this.props.user.username}</Header>
          </Container> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(UserProfile)
