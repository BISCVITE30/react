import React, { Component } from 'react';
import './index.scss';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

  }

  setBodyColor = color => {
    this.setState({
      name: color
    })
  };


  render() {
    return (
      <div>
        <div className="picker__title">{this.state.name}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setBodyColor(CORAL)}
            onMouseLeave={() => this.setBodyColor('')}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setBodyColor(AQUA)}
            onMouseLeave={() => this.setBodyColor('')}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setBodyColor(BISQUE)}
            onMouseLeave={() => this.setBodyColor('')}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
