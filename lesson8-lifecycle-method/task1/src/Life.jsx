import React, { Component } from 'react';

class Life extends Component {
  constructor() {
    super();
    console.log('good place to create state');
  }

  ComponentDidMount() {
    return console.log('API calls, subscritions');
  }

  shouldComponentUpdate(nextProps, nextState) {
   return console.log('decide to render not to render');
  }

  ComponentDidUpdate(prevProps, prevState) {
    return console.log('some updates based on new props');
  }

  ComponentWillUnmount() {
    return console.log('cleanup before DOM related to component will be removed');
  }

  render() {
    console.log('return React element to build DOM');
    return null
  }
}

export default Life;
