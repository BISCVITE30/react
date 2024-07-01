import React, { Component } from 'react';

class Expand extends Component {
  state = {
    rotated: true,
  };


  render() {
    const { title, toggleBtn, children } = this.props;
    const { rotated } = this.state;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button
            className="expand__toggle-btn"
            onClick={() => {
              toggleBtn();
              this.setState({ rotated: !rotated });
            }}
          >
            <i className="fas fa-chevron-up" />
          </button>
        </div>
        <div className="expand__content">{children}</div>
      </div>
    );
  }
}

export default Expand;
