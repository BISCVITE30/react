import React, { Component } from 'react';
import Dialog from './Dialog.jsx';

class App extends Component {
  state = {
    isOpen: false,
  }

  isOpen = () => {
    this.setState({
      isOpen: true,
    })
  }

  onClose = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.isOpen}>Show dialog</button>
        <Dialog title="Recommendation" isOpen={this.state.isOpen} onClose={this.onClose} >
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
