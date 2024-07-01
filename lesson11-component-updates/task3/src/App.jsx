import React, { Component } from 'react';
import Expand from './Expand.jsx';

class App extends Component {
  state = {
    content: false,
  };

  toggleBtn = () => {
    this.setState(prevState => ({
      content: !prevState.content,
    }));
  };

  render() {
    return (
      <div className="app">
        <Expand title="Some title" toggleBtn={this.toggleBtn} expanded={this.state.content}>
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
