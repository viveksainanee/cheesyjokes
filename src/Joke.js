import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faThumbsDown,
  faStroopwafel
} from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp, faThumbsDown, faStroopwafel);

class Joke extends Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.props.increment(this.props.id);
  }

  handleDecrement() {
    this.props.decrement(this.props.id);
  }

  render() {
    return (
      <div key={this.props.id} className="Joke">
        <div>{this.props.text}</div>

        <button onClick={this.handleIncrement}>
          <FontAwesomeIcon icon="thumbs-up" />
        </button>

        {this.props.up}
        <button onClick={this.handleDecrement}>
          <FontAwesomeIcon icon="thumbs-down" />
        </button>
        {this.props.down}

        <div> Net Score: {+this.props.up + +this.props.down}</div>
      </div>
    );
  }
}

export default Joke;
