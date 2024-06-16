import React, { Component } from 'react';
import './index.scss';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isLoading: false,
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
      isLoading: true,
    });

    setTimeout(() => {
      this.setState({
        isLoading: false,
        isLoggedIn: true,
      });
    }, 2000);
  }

  render() {
    const { isLoggedIn, isLoading } = this.state;

    return (
      <div className="panel">
        {isLoading ? (
          <Spinner size={36} />
        ) : (
          <div>
            {isLoggedIn ? (
              <Logout onLogout={this.handleLogout} />
            ) : (
              <Login onLogin={this.handleLogin} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Auth;
