import React, { Component } from 'react';

class Life extends Component {
  constructor() {
    super();

    this.state = {
      hello: 'Hello',
    };
    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
    return true
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
  }

  Hi = () => {
    this.setState({
      hello: 'Hi',
    });
  };

  render() {
    console.log('return React element to build DOM');
    return <div onClick={() => this.Hi()}>{this.state.hello}</div>;
  }
}

export default Life;
