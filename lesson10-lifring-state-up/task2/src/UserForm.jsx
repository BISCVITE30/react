import React from 'react';

const UserForm = ({ userData, handleChange }) => {
  return (
    <form className="user-form">
      <input type="text" name="firstName" onChange={handleChange} className="user-form__input" value={userData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} className="user-form__input" value={userData.lastName} />
    </form>
  );
};

export default UserForm;
