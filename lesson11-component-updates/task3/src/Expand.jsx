import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

class Expand extends Component {
  state = {
    isExpanded: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.expanded !== prevProps.expanded) {
      this.setState({ isExpanded: this.props.expanded });
    }
  }

  render() {
    const { title, toggleBtn, children } = this.props;
    const { isExpanded } = this.state;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button
            className="expand__toggle-btn"
            onClick={() => {
              toggleBtn();
              this.setState({ isExpanded: !isExpanded });
            }}
          >
            <FontAwesomeIcon
              icon={faChevronUp}
              style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>
        </div>
        {isExpanded && <div className="expand__content">{children}</div>}
      </div>
    );
  }
}

export default Expand;
