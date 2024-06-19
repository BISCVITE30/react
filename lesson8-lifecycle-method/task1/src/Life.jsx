import React, { Component } from 'react';

class Life extends Component {
  constructor() {
    super();
    console.log('constructor: good place to create state');
  }

  ComponentDidMount() {
    return console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
   return console.log(
     'shouldComponentUpdate(nextProps, nextState): decide to render or not to render',
   );
  }

  ComponentDidUpdate(prevProps, prevState) {
    return console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  ComponentWillUnmount() {
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
