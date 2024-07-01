import React, { Component } from 'react';

class Dialog extends Component {
  render() {
    if(!this.props.isOpen){
        return null;
    }

    return (
      <div class="dialog">
        <div class="dialog__heading">
          <h4 class="dialog__title">{this.props.title}</h4>
          <button class="dialog__close-btn" onClick={this.props.onClose}>+</button>
        </div>
        <div class="dialog__content">{this.props.children}</div>
      </div>
    );
  }
}

export default Dialog;
