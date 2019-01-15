import React, { Component } from 'react';

import { userCoordStyle } from './UserCoordStyle.js';

export default class UserCoord extends Component {

  render() {
    return (
       <div style={userCoordStyle}>
          {this.props.text}
       </div>
    );
  }
}
