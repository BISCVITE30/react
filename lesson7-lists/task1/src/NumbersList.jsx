import React from 'react';

const NumbersList = props => {
  const numberElem = props.numbers.map(num => <li>{num}</li>);
  return <ul>{numberElem}</ul>;
};

export default NumbersList;
