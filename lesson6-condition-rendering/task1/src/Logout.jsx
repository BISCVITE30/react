import React, { Component } from 'react';

class Logout extends Component {
  render() {
    const { onLogout } = this.props;
    return (
      <button className="btn logout" onClick={onLogout}>
        Logout
      </button>
    );
  }
}

export default Logout;
