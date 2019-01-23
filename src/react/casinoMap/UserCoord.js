import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'

export default class UserCoord extends Component {

  render() {
    return (
       <div>
        <Icon style={{width:'auto' }} name='male' color='orange' size='huge'/>
          {this.props.text}
       </div>
    );
  }
}
