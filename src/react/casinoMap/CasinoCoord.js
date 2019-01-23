import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'

export default class CasinoCoord extends Component {

  render() {
    return (
       <div >
        <Icon style={{width:'auto' }} size='huge' color='red' name='map marker alternate'/>
          {this.props.text}
       </div>
    );
  }
}
