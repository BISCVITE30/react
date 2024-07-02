import React from 'react';
import classNames from 'classnames';

const Task = ({ id, text, done, onChange, onDelete }) => {
  return (
    <li key={id} className={classNames('list-item', { 'list-item_done': done })}>
      <input type="checkbox" onChange={() => onChange(id)} className="list-item__checkbox" defaultChecked={done} />
      <span className='list-item__text'>{text}</span>
      <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>
  );
};

export default Task;
