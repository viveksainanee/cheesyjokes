import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';

class JokeDad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokes: [],
      isLoading: true
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  async componentDidMount() {
    try {
      let response = [];

      for (let i = 0; i < 10; i++) {
        response.push(
          axios({
            url: 'https://icanhazdadjoke.com',
            method: 'get',
            headers: { Accept: 'application/json' }
          })
        );
      }

      let resolvedPromises = await Promise.all(response);

      let jokesArr = resolvedPromises.map(promise => promise.data);

      jokesArr.forEach(jokeObj => {
        jokeObj.up = 0;
        jokeObj.down = 0;
      });

      this.setState({
        jokes: jokesArr,
        isLoading: false
      });
    } catch (err) {
      console.log(err);
    }
  }

  increment(id) {
    console.log(id);
    for (let i = 0; i < this.state.jokes.length; i++) {
      if (this.state.jokes[i].id === id) {
        this.setState(st => st.jokes[i].up++);
      }
    }
  }

  decrement(id) {
    for (let i = 0; i < this.state.jokes.length; i++) {
      if (this.state.jokes[i].id === id) {
        this.setState(st => st.jokes[i].down--);
      }
    }
  }

  render() {
    let jokeList = this.state.jokes.map(joke => (
      <Joke
        text={joke.joke}
        id={joke.id}
        up={joke.up}
        down={joke.down}
        increment={this.increment}
        decrement={this.decrement}
      />
    ));
    return <div>{this.state.isLoading ? 'HOLD YO HORSES' : jokeList}</div>;
  }
}

export default JokeDad;
