import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import User from './User';

const Users = () => {
  return (
    <div className="page__content">
      <BrowserRouter>
        <h1>Users</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/users/github">Github</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users/facebook">Facebook</Link>
          </li>
        </ul>
        <Route path="/users/:userId">
        <User />
        </Route>
        <Route exact path='/users'>
            <span>Select a user please</span>
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default Users;
