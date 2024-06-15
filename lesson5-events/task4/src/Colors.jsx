import React, { Component } from 'react';
import './index.scss';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  setBodyColor = color => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          onClick={() => this.setBodyColor(RED)}
          style={{ backgroundColor: RED }}
        ></button>
        <button
          className="colors__button"
          onClick={() => this.setBodyColor(GREEN)}
          style={{ backgroundColor: GREEN }}
        ></button>
        <button
          className="colors__button"
          onClick={() => this.setBodyColor(BLUE)}
          style={{ backgroundColor: BLUE }}
        ></button>
      </div>
    );
  }
}

export default Colors;
