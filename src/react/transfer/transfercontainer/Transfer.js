import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Divider, Header, Icon, Button, Grid } from 'semantic-ui-react'
import { postingLike, deletingLike } from '../../../redux/actions/like'



class Transfer extends Component {
  constructor() {
    super()
    this.state={
      likes:[],
      likeCount: 0
    }
  }

  componentDidMount() {
    let likeArray = this.props.transfer.likes

    this.setState({
      likes: likeArray,
      likeCount: likeArray.length
    })
  }

  // RETURNS OBJECT SENDER/RECIPIENT'S FULL NAME STRING
  fullNameConverter = (object, type) => {
    return object[type].first_name + ' ' + object[type].last_name
  }

  // IN PROGRESS
  // FUNCTION ALLOWS USER A MAX OF 1 CLICK PER TRANSACTION
  // AS IS, THE FUNCTION PERMITS MULTIPLE LIKES IF THE USER CLICKS MULTIPLE TIMES BEFORE THE INITIAL LIKE PERSISTS.
  handleClick = () => {
    let currentUserId = parseInt(localStorage.getItem('currentUser'))
    let userIdArray;

    // RETURNS USER IDS THAT HAVE LIKED TRANSACTION
    if (this.state.likes.length > 0) {
      userIdArray = this.state.likes.map(transferObject => transferObject.user_id)
    }

    let copyState = this.state.likes

    if (this.state.likes.length > 0 && userIdArray.includes(currentUserId)) {
      let index = userIdArray.indexOf(currentUserId)
      let originalLike = this.state.likes[index]

      if ('id' in originalLike) {
        this.props.deletingLike(originalLike)
      }
      copyState.splice(index, 1)
      this.setState({
        likes: copyState,
        likeCount: this.state.likeCount - 1,
      })
    } else {
      let likeObject = {
        transaction_id: this.props.transfer.id,
        user_id: currentUserId,
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name
      }
      this.props.postingLike(likeObject)
      if (copyState.length === 0 ) {
        this.setState({
          likes: [likeObject],
          likeCount: this.state.likeCount + 1,
        })
      } else {
        copyState.push(likeObject)
        this.setState({
          likes: copyState,
          likeCount: this.state.likeCount + 1,
        })
      }
    }
  }

  render() {
    return(
      <Container>

        <Header as='h4'>
          {this.fullNameConverter(this.props.transfer, 'sender')} paid {this.fullNameConverter(this.props.transfer, 'recipient')} ${this.props.transfer.amount} on {this.props.transfer.date}
        </Header>

        <Grid columns={2}>
          <Grid.Column>
            <Button color='white' onClick={this.handleClick}>
              <Icon name='like' color='red'/>
              {this.state.likeCount}
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Container>
              {this.state.likes.map(userObject => (
                <p>{userObject.first_name + ' ' +userObject.last_name}</p>
              ))}
            </Container>
          </Grid.Column>
        </Grid>

        <p>{this.props.transfer.message}</p>

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

export default connect(mapStateToProps, { postingLike, deletingLike })(Transfer)
