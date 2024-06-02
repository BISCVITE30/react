import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import Comment from './Comment.jsx';

const rootElem = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars.githubusercontent.com/u/138376478?v=4',
};

ReactDOM.render(
    <Comment author={userInfo} text = 'Good job!' date={ new Date() }/>,
    rootElem
)