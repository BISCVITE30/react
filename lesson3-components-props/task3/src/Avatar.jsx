import React from 'react';
import "./avatar.scss";

const Avatar = (props) => {
  return <img src={props.avatarUrl} alt={props.name} className="avatar" />;
};

export default Avatar;
