import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Divider, Header, Icon, Button } from 'semantic-ui-react'
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

  handleClick = () => {
    let currentUserId = parseInt(localStorage.getItem('currentUser'))
    let userIdArray;

    if (this.state.likes.length > 0) {
      userIdArray = this.state.likes.map(transferObject => transferObject.user_id)
    }

    if (this.state.likes.length > 0 && userIdArray.includes(currentUserId)) {
      let index = userIdArray.indexOf(currentUserId)
      let originalLike = this.state.likes[index]

      if ('id' in originalLike) {
        this.props.deletingLike(originalLike)
      }
      let copyState = this.state.likes.slice()
      copyState.splice(index, 1)
      this.setState({
        likes: copyState,
        likeCount: this.state.likeCount - 1,
      })
    } else {
      let likeObject = {
        transaction_id: this.props.transfer.id,
        user_id: currentUserId,
      }
      this.props.postingLike(likeObject)
      let copyState = this.state.likes
      if (copyState.length === 0 ) {
        copyState = copyState.push(likeObject)
      } else {
        copyState = copyState.push(likeObject)
      }
      this.setState({
        likes: copyState,
        likeCount: this.state.likeCount + 1,
      })
    }
  }

  render() {
    return(
      <Container>
        <Header as='h4'>{this.fullNameConverter(this.props.transfer, 'sender')} paid {this.fullNameConverter(this.props.transfer, 'recipient')} ${this.props.transfer.amount} on {this.props.transfer.date}</Header>
        <Button color='blue' onClick={this.handleClick}>
          <Icon name='like' color='red'/>
          {this.state.likeCount}
        </Button>
        <p>{this.props.transfer.message}</p>
        <Divider />
      </Container>
    )
  }
}



export default connect(null, { postingLike, deletingLike })(Transfer)
