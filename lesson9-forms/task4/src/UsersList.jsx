import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
  state = {
    filterText: '',
  };

  handleFilter = filterText => {
    this.setState({ filterText });
  };

  render() {
    const { filterText } = this.state;
    const filteredUsers = this.props.users.filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase()),
    );
    
    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          count={filteredUsers.length}
          onChange={this.handleFilter}
        />
        <ul className="users">
          {filteredUsers.map(user => (
            <User name={user.name} age={user.age} id={user.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
