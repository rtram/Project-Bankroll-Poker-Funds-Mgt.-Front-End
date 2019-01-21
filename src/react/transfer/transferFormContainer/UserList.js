import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Grid, Search, Header, Icon, Container } from 'semantic-ui-react'
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
        <Container
          style={{
            marginTop: '5em'
          }}
        >
          {this.state.filteredList.length === 0 && this.state.search.length > 0 ?
            <Header as ='h4' style={{ color: 'red' }}>
              <Icon name='close'/>
              No Person Found With That Username/Name'
            </Header>
            : null}
          <Search
            onSearchChange={this.handleChange}
            open={false}
            loading={this.state.loading}
            onKeyDown={this.toggleLoading}
            onKeyUp={this.toggleLoading}
            placeholder='Search People'
          />
        </Container>
        <Container
          style={{
            marginTop: '5em'
          }}
        >
          <Header as ='h2'>People You Might Know</Header>
          <Grid
            columns={4}
          >
            {this.state.filteredList.length > 0 ? this.state.filteredList.map(user => (
              <UserCard user={user} />
            )) : this.props.userList.map(user => (
              <UserCard user={user} />
            ))}
          </Grid>
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
