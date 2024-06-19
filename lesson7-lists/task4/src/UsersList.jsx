import React, { Component } from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  goPrev = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage > 1 ? prevState.currentPage - 1 : 1,
    }));
  };

  goNext = () => {
    const totalPages = Math.ceil(this.props.users.length / 3);
    this.setState(prevState => ({
      currentPage: prevState.currentPage < totalPages ? prevState.currentPage + 1 : totalPages,
    }));
  };

  render() {
    const { currentPage } = this.state;
    const { users } = this.props;
    const startIndex = (currentPage - 1) * 3;
    const usersList = users.slice(startIndex, startIndex + 3);

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={3}
        />
        <ul className="users">
          {usersList.map(user => (
            <User key={user.id} name={user.name} age={user.age} id={user.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
