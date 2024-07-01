import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon
              icon={faChevronUp}
              style={{ transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>
        </div>
        <div className="expand__content">{children}</div>
      </div>
    );
  }
}

export default Expand;
