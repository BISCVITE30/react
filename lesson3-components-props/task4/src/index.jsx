import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting.jsx';
import './index.scss';

const rootElem = document.querySelector('#root');

ReactDOM.render(
  <Greeting firstName="John" lastName="Doe" birthDate={new Date('2004-04-30T00:00:00Z')} />,
  rootElem,
);
