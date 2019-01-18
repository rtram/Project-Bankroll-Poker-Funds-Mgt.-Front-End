import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Container, Search, Header, Icon } from 'semantic-ui-react'
import UserCard from './UserCard.js'

class UserList extends Component {
  constructor() {
    super()
    this.state={
      search:'',
      loading: false,
      filteredList: []
    }
  }

  handleChange = event => {
    this.setState({
      search: event.target.value
    }, () => this.handleSearch())
  }

  toggleLoading = event => {
    this.setState({
      loading: !this.state.loading
    })
  }

  handleSearch = () => {
    let filteredList;

    filteredList = this.props.userList.filter(userObject => {
      if (userObject.username.toLowerCase().includes(this.state.search) || userObject.first_name.toLowerCase().includes(this.state.search) || userObject.last_name.toLowerCase().includes(this.state.search)) {
        return true
      } else {
        return false
      }
    })

    this.setState({
      filteredList: filteredList
    })
  }

  render() {
    return(
      <Fragment>
        <Search onSearchChange={this.handleChange} open={false} loading={this.state.loading} onKeyDown={this.toggleLoading} onKeyUp={this.toggleLoading}/>
        <Container>
          People You Might Know
          <br />
          {this.state.filteredList.length === 0 && this.state.search.length > 0 ?
            <Header as ='h4' style={{ color: 'red' }}>
              <Icon name='close'/>
              No Person Found With That Username/Name'
            </Header>
            : null}
          {this.state.filteredList.length > 0 ? this.state.filteredList.map(user => (
            <UserCard user={user} />
          )) : this.props.userList.map(user => (
            <UserCard user={user} />
          ))}
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    userList: state.userList
  }
}

export default connect(mapStateToProps, { })(UserList);
