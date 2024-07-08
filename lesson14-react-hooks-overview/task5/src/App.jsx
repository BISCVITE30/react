import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <div>
      <Clock location="London" offset={0} />
      <Clock location="Kyiv" offset={2} />
      <Clock location="New York" offset={-5} />
    </div>
  );
};

export default App;
