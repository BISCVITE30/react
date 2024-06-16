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
    let button;

    if (this.state.isLoggedIn) {
        button = <button className='btn logout' onClick={() => this.handleLogout()}>Logout</button>;
    } else {
        button = <button className='btn login' onClick={() => this.handleLogin()}>Login</button>;
  
    }

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
      </div>
    );
  }
}

export default Auth;
