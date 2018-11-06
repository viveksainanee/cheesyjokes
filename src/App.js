import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JokeDad from './JokeDad';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp, faThumbsDown);

class App extends Component {
  render() {
    return (
      <div className="App">
        <JokeDad />
      </div>
    );
  }
}

export default App;
