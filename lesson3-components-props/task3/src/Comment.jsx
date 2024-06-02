import React from 'react';
import './comment.scss';
import moment from 'moment';
import UserInfo from './UserInfo.jsx';

const formatDate = date => moment(date).format('DD MM YYYY');

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment__text">{props.text}</div>
      <div className="comment__name">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
