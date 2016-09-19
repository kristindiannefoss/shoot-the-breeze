import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
const _ =  require('lodash');
import MessageInput from './MessageInput';

class ActionButton extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <button
        onClick={ () => this.props.handleClick() }
        className="ActionButton" 
        disabled={this.props.isDisabled}>
          {this.props.text}
      </button>
    )
  }
}

module.exports = ActionButton;
