import React, { Component } from 'react';

const fetchUser = match => {
  return fetch(`https://api.github.com${match.url}`).then(repsonse => repsonse.json());
};

class User extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUserData();
  }

  componentDidUpdate(prevProps) {
    const prevUser = prevProps.match.params.userId;
    const currentUser = this.props.match.params.userId;

    if (prevUser !== currentUser) {
      this.fetchUserData();
    }
  }

  fetchUserData() {
    const { match } = this.props;
    fetch(`https://api.github.com/users/${match.params.userId}`).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error()
    }).then(userData => {
      this.setState({
        userData,
      })
    })
  }
  render() {
    const { userData } = this.state;
    if(!userData){
      return null;
    }
    const { name, location, avatar_url } = userData;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
