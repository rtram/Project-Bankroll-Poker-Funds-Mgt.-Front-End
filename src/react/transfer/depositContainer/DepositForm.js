import React, { Component } from 'react';
import { connect } from 'react-redux'

class DepositForm extends Component {

  render() {
    return(
      <div>
        Add More Money to Account Balance
      </div>
    )
  }
}

export default connect()(DepositForm);
