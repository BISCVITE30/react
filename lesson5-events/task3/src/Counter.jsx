import React, { Component } from 'react';
import './index.scss';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  render() {
    return (
      <div class="counter">
        <button data-action="decrease" className="counter__button" onClick={this.decrement}>
          -
        </button>
        <span className="counter__value">{this.state.counter}</span>
        <button data-action="increase" className="counter__button" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
