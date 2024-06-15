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
            className="picker__button"
            onMouseEnter={() => this.setBodyColor(CORAL)}
            onMouseLeave={() => this.setBodyColor('')}
            style={{ backgroundColor: CORAL }}
          ></button>
          <button
            className="picker__button"
            onMouseEnter={() => this.setBodyColor(AQUA)}
            onMouseLeave={() => this.setBodyColor('')}
            style={{ backgroundColor: AQUA }}
          ></button>
          <button
            className="picker__button"
            onMouseEnter={() => this.setBodyColor(BISQUE)}
            onMouseLeave={() => this.setBodyColor('')}
            style={{ backgroundColor: BISQUE }}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
