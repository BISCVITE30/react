import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Game from './Square.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Game />, rootElement);