import React, { Component } from 'react';
import UserProfile from './UserProfile.jsx';
import UserMenu from './UserMenu.jsx';

class App extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUserData(this.props.userId);
  }

  fetchUserData = userId => {
    const userUrl = `https://api.github.com/users/${userId}`;
    fetch(userUrl)
      .then(response => response.json())
      .then(userData => this.setState({ userData }));
  };
  render() {
    if (!this.state.userData) {
      return null;
    }
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
