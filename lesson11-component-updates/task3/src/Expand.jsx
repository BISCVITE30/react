import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isExpanded: false, // Переименовано состояние для отображения развёрнутости
  };

  componentDidUpdate(prevProps) {
    // Проверяем изменение свойства expanded в props
    if (this.props.expanded !== prevProps.expanded) {
      this.setState({ isExpanded: this.props.expanded }); // Обновляем состояние isExpanded при изменении expanded
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
              toggleBtn(); // Вызываем toggleBtn из props
              this.setState({ isExpanded: !isExpanded }); // Инвертируем состояние isExpanded
            }}
          >
            <i
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
