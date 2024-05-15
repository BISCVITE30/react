// <div class='greeting'>Hello, React!</div>

const rootElement = document.querySelector('#root');

const greetingElem = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!'
);


ReactDOM.render(greetingElem, rootElement)