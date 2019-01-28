import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Divider, Header, Icon, Button, Grid, Label } from 'semantic-ui-react'
import { postingLike, deletingLike } from '../../../redux/actions/like'

class Transaction extends Component {

  // RETURNS OBJECT SENDER/RECIPIENT'S FULL NAME STRING
  fullNameConverter = (object, type) => {
    return object[type].first_name + ' ' + object[type].last_name
  }

  handleClick = () => {
    let currentUserId = parseInt(localStorage.getItem('currentUser'))
    let userIdArray;

    // RETURNS USER IDS THAT HAVE LIKED TRANSACTION
    if (this.props.transfer.likes.length > 0) {
      userIdArray = this.props.transfer.likes.map(transferObject => transferObject.user_id)
    }

    if (this.props.transfer.likes.length > 0 && userIdArray.includes(currentUserId)) {
      let index = userIdArray.indexOf(currentUserId)
      let originalLike = this.props.transfer.likes[index]
      this.props.deletingLike(originalLike)
    } else {
      let likeObject = {
        transaction_id: this.props.transfer.id,
        user_id: currentUserId,
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name
      }
      this.props.postingLike(likeObject)
    }
  }

  shortenedLikeList = () => {
    return this.props.transfer.likes.slice(0, 2)
  }

  // IF CURRENT USER HAS ALREADY LIKED THE TRANSACTION, THE LIKE BUTTON WILL BE A DIFFERENT COLOR.
  conditionalLikeButton = () => {
    let currentUserId = parseInt(localStorage.getItem('currentUser'))
    let userIdArray;

    if (this.props.transfer.likes.length > 0) {
      userIdArray = this.props.transfer.likes.map(transferObject => transferObject.user_id)
      if (userIdArray.includes(currentUserId)) {
        return true
      } else {
        return false
      }
    }
  }

  render() {
    return(
      <Container>

        <Header as='h3'>
          {this.props.transfer.sender ? this.fullNameConverter(this.props.transfer, 'sender') : 'Somebody'} paid {this.props.transfer.recipient ? this.fullNameConverter(this.props.transfer, 'recipient') : 'Somebody' } ${this.props.transfer.amount} on {this.props.transfer.date}
        </Header>

        <p>{this.props.transfer.message}</p>

        <Grid columns={2}>
          <Grid.Column
            style={{
              textAlign: 'right'
            }}
            width={6}
          >
          { this.conditionalLikeButton() ?
            <Button color='blue' onClick={this.handleClick}>
              <Icon name='like' color='red'/>
              {this.props.transfer.likes.length}
            </Button>
            :
            <Button color='grey' onClick={this.handleClick}>
              <Icon name='like' color='red'/>
              {this.props.transfer.likes.length}
            </Button>
          }
          </Grid.Column>
          <Grid.Column
            width={10}
            style={{
              margin:'auto',
              textAlign: 'left'
            }}
          >
            <Container>
              {this.shortenedLikeList().length === 0 ?
                <Label color='grey'>
                  Be the first to like this.
                </Label>:
                null
              }
              {this.shortenedLikeList().map(userObject => (
                <Label color='green' >
                  {userObject.first_name + ' ' +userObject.last_name}
                </Label>
              ))}
              {this.props.transfer.likes.length > 2 ?
                <Label color='green'>
                  ...
                </Label>
                : null}
            </Container>
          </Grid.Column>
        </Grid>
        <Divider />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { postingLike, deletingLike })(Transaction)
