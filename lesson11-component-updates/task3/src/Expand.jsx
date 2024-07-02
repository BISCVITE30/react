import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isExpanded: false,
  };

  toggleBtn = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    const { title, children } = this.props;
    const { isExpanded } = this.state;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button
            className="expand__toggle-btn"
            onClick={() => {
              this.toggleBtn();
              this.setState({ isExpanded: !isExpanded });
            }}
          >
            +<i
              className="fas fa-chevron-up"
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
