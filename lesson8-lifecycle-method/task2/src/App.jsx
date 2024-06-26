import React, { Component } from 'react';
import Clock from './Clock.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      visible: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <>
        <button onClick={this.toggle}>toggle</button>
        <div>{this.state.visible && <Clock location="New York" offset={-5} />}</div>
        <div>{this.state.visible && <Clock location="Kyiv" offset={2} />}</div>
        <div>{this.state.visible && <Clock location="London" offset={0} />}</div>
      </>
    );
  }
}

export default App;
