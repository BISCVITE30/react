import React, { Component } from "react";
import './index.scss'

class GoodButton extends Component {
    handleClick(event) {
        alert(event.target.textContent);
    }

    render() {
        return(
            <button className="fancy-button" onClick={this.handleClick}>Click me!</button>
        )
    }
}

export default GoodButton;