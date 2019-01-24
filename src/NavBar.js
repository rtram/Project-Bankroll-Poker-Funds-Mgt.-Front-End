import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Button,
  Icon,
  Container,
  Dropdown,
  Image,
  Menu,
  Search
} from 'semantic-ui-react'
import './App.css'
import { fetchingUserBalances, fetchingUserList } from './redux/actions/users.js'
import { userLogout } from './redux/actions/login.js'
import NavBarSearchBar from './NavBarSearchBar'

class NavBar extends Component {
  constructor() {
    super()
    this.state={
      isLoading: false,
      value: '',
      results: []
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      this.props.fetchingUserBalances(localStorage.getItem('currentUser'))
    }
    this.props.fetchingUserList()

  }


  handleLogout = () => {
    this.props.userLogout()
  }

  render() {
    let source = []
    if (this.props.userList.length > 0) {
      this.props.userList.map(userObject => {
        let object = {
          username: userObject.username,
          first_name: userObject.first_name,
          last_name: userObject.last_name
        }
        source.push(object)
      })
    }

    return(
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header>
            <Link to='/home'>
              <Image size='tiny' src='https://i.imgur.com/Frwwd8f.png' style={{  marginRight: '1.5em' }}  />
            </Link>
          </Menu.Item>
          <Menu.Item >
            <Link to='/map'>
            <Icon name='map marker alternate' color='red'/>
              Casino Map
            </Link>
          </Menu.Item>
          <Menu.Item>
            <NavBarSearchBar
              style={{
                width:'15em'
              }}
              source={source}
            />
          </Menu.Item>
          <Menu.Menu position='right'>
          <Menu.Item >
            <Link to='/dashboard'>
            <Icon name='dashboard'/>
              Poker Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item >
            <Icon name='dollar sign' color='green'/>
            <Dropdown item text='Transfers'>
              <Dropdown.Menu>
                <Link to='/transferhome'>
                  <Dropdown.Item>
                    Transfer Dashboard
                  </Dropdown.Item>
                </Link>
                <Link to='/bank'>
                  <Dropdown.Item>
                    Deposit or Withdraw Funds
                  </Dropdown.Item>
                </Link>
                <Link to='/transferform'>
                  <Dropdown.Item>
                    Pay Or Request Funds
                  </Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item >
            <Link to='/inbox'>
              <Icon name='mail' color='brown'>
                {this.props.received_requests && this.props.received_requests.length > 0?
                  <span className='inbox-badge'>
                    {this.props.received_requests.length}
                  </span>
                  : null}
              </Icon>
              Inbox
            </Link>
          </Menu.Item>
          <Menu.Item >
            <Link to='/myprofile'>
              <Icon name='user outline' color='yellow'/>
              My Profile
            </Link>
          </Menu.Item>
          <Menu.Item >
            {localStorage.getItem('token') ?
            <Link to='/home'>
              <Button onClick={this.handleLogout} className='loginlogout'>
                <Icon name='sign-out' color='blue'/>
                  Logout

              </Button>
            </Link>
            :
            <Link to='/login'>
              <Button className='loginlogout'>
                <Icon name='sign-in' color='blue'/>
                Login
              </Button>
            </Link>
            }
          </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  return {
    received_requests: state.received_requests,
    userList: state.userList
  }
}

export default connect(mapStateToProps, { fetchingUserBalances, userLogout, fetchingUserList })(NavBar)
