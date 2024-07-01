import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
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
    const text = (
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
    );
    return (
      <div className="app">
        <Expand title="Some title" toggleBtn={this.toggleBtn} expanded={this.state.content}>
          {this.state.content ? text : ''}
        </Expand>
      </div>
    );
  }
}

export default App;
