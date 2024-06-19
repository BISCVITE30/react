import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor() {
    super();
    this.state = {
      status: null,
    };
  }

  componentDidMount() {
    this.setState({
      status: 'online',
    });

    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
  }

  componentWillUnmount(){
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
  }

  handleOnline = () => {
    this.setState({
      status: 'online',
    });
  };

  handleOffline = () => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    // return this.state.status === 'online' ? this.handleOnline() : this.handleOffline;
    return (
      <div className={`status ${this.state.status === 'offline' ? 'status_offline' : ''}`}>
        {this.state.status}
      </div>
    );
  }
}

export default ConnectionStatus;
