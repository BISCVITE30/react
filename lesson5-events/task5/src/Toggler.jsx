import React, { Component } from 'react';
import './index.scss';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'Off',
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(event => ({
      status: event.status === 'Off' ? 'On' : 'Off',
    }));
  }

  render() {
    return (
      <div className="toggler" onClick={this.toggle}>
        {this.state.status}
      </div>
    );
  }
}

export default Toggler;
