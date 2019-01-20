import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Button
} from 'semantic-ui-react'

class NavBar extends Component {

  handleLogout = () => {
    localStorage.clear()
  }

  render() {
    return(
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header>
            <Link to='/home'>
              <Image size='tiny' src='https://i.imgur.com/5ZouFQb.png' style={{  marginRight: '1.5em' }}  />
            </Link>
          </Menu.Item>
          <Menu.Item >
            <Link to='/map'>
              Casino Map
            </Link>
          </Menu.Item>
          <Menu.Menu position='right'>
          <Menu.Item >
            <Link to='/dashboard'>
              Poker Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item >
            <Dropdown item text='Transfers'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link style={{ color: 'black' }} to='/transferhome'>
                    Transfer Dashboard
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link style={{ color: 'black' }} to='/bank'>
                    Deposit or Withdraw Funds
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link style={{ color: 'black' }} to='/transferform'>
                    Pay Or Request Funds
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item >
            <Link to='/inbox'>
              Inbox
            </Link>
          </Menu.Item>
          <Menu.Item >
            {localStorage.getItem('token') ?
            <Link to='/home'>
              <Button onClick={this.handleLogout}>
                Logout
              </Button>
            </Link>:
            <Link to='/login'>
              Login
            </Link>
            }
          </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}


export default NavBar
