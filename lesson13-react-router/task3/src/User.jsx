import React from 'react';

const User = ({ match }) => {
  console.log(match.url);
  const fetchUser =  (match) => {
    return fetch(`https://api.github.com${match.url}`).then(repsonse => repsonse.json())
  }

  const user = fetchUser(match).then(userData => userData)

  return (
    <div className="user">
      <img alt="User Avatar" src={user.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">GitHub</span>
        <span className="user__location">San Francisco,CA</span>
      </div>
    </div>
  );
};

export default User;
