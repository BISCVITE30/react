import React, { Component } from 'react';
import './index.scss';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      static: 'Off',
    };
  }

  Toggle(event) {
    event.target.textContent === 'Off' ? event.target.textContent = 'On' : event.target.textContent = 'Off'
  }

  render() {
    return (
      <div className="toggler" onClick={this.Toggle}>
        {this.state.static}
      </div>
    );
  }
}

export default Toggler;
