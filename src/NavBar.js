import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'

class NavBar extends Component {

  render() {
    return(
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Link to='/home'>
              <Image size='tiny' src='https://i.imgur.com/7LjNOYe.png' style={{  marginRight: '1.5em' }}  />
            </Link>
          </Menu.Item>
          <Menu.Item as='a' position='left'>
            <Link to='/home'>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item as='a' position='right'>
            <Link to='/users/1'>
              Poker Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item as='a' position='right'>
            <Link to='/map'>
              Casino Map
            </Link>
          </Menu.Item>
          <Menu.Item as='a' position='right'>
            <Dropdown item text='Transfers'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link style={{ color: 'black' }} to='/users/1/transferhome'>
                    Transfer Dashboard
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link style={{ color: 'black' }} to='/users/1/bank'>
                    Deposit or Withdraw to Bank
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link style={{ color: 'black' }} to='/users/1/transfer'>
                    Pay Or Request Money
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item as='a' position='right'>
            <Link to='/login'>
              Login
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}


export default NavBar