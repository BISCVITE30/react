import React from 'react';
import Counter from './counter.jsx';

const App = () => {
  return (
    <>
      <Counter start={5} interval={1000} />
      <Counter start={17} interval={1000} />
      <Counter start={-21} interval={1000} />
    </>
  );
};

export default App;
