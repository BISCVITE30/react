import React, { Component } from 'react';
import Greeting from './Greeting.jsx';
import './index.scss';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false,
    });
  }

  handleLogin() {
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div className="panel">
        <Greeting isLoggedIn={isLoggedIn} />
        <div>
          {isLoggedIn ? (
            <Logout onLogout={this.handleLogout} />
          ) : (
            <Login onLogin={this.handleLogin} />
          )}
        </div>
      </div>
    );
  }
}

export default Auth;
