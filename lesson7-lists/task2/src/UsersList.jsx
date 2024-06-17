import React, { Component } from 'react';
import User from './User.jsx';

class UsersList extends Component {
  state = {
    sorting: null,
  };

  toggleSorting = () => {
    const newSorting = this.state.sorting === 'ASC' ? 'DESC' : 'ASC';
    this.setState({
      sorting: newSorting,
    });
  };

  render() {
    let usersList;
    if (this.state.sorting) {
      usersList = this.props.users
        .slice()
        .sort((a, b) => (this.state.sorting === 'ASC' ? a.age - b.age : b.age - a.age));
    } else {
        usersList = this.props.users;
    }
    return (
      <div>
        <button onClick={this.toggleSorting} className="btn">
          {this.state.sorting || '-'}
        </button>
        <ul className="users">
          {usersList.map(user => (
            <User name={user.name} age={user.age} id={user.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
