import React, { Component } from 'react';

class Life extends Component {
  constructor() {
    super();
    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    return console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
   return console.log(
     'shouldComponentUpdate(nextProps, nextState): decide to render or not to render',
   );
  }

  componentDidUpdate(prevProps, prevState) {
    return console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    return console.log(
      'componentWillUnmount(): cleanup before DOM related to component will be removed',
    );
  }

  render() {
    console.log('return React element to build DOM');
    return null
  }
}

export default Life;
