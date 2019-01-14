import React, { Component } from 'react';
import { connect } from 'react-redux'

class TransferForm extends Component {

  render() {
    return(
      <div>
        Pay Or Request Money
      </div>
    )
  }
}

export default connect()(TransferForm);
