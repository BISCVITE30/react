import React from 'react';

const User = ({ id, name, age }) => {
  return (
    <li key={id} className="user">
      <span className="user__name">{name}</span>
      <span className="user__age">{age}</span>
    </li>
  );
};

export default User;
