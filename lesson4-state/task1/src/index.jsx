import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Counter from './counter.jsx';

const rootElem = document.querySelector('#root');

ReactDOM.render(
  <>
    <Counter start={5} interval={1000} />
    <Counter start={17} interval={1000} />
    <Counter start={-21} interval={1000} />
  </>,
  rootElem,
);
