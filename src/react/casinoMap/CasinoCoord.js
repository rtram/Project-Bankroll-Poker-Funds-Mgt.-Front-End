import React, { Component } from 'react';

import { casinoCoordStyle } from './CasinoCoordStyle.js';

export default class CasinoCoord extends Component {

  render() {
    return (
       <div style={casinoCoordStyle}>
          {this.props.text}
       </div>
    );
  }
}
