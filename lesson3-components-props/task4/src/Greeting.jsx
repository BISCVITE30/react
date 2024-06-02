import React from 'react';

const getAge = date => {
  return new Date().getFullYear() - new Date(date).getFullYear();
};

const Greeting = props => {
  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I am ${getAge(props.birthDate)} years old`}</div>
  );
};

export default Greeting;
