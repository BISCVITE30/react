import React, { Component } from "react";
import './index.scss'

class GoodButton extends Component {
    clickOn(){
        alert('You Click')
    }
    render() {
        return(
            <button className="fancy-button" onClick={this.clickOn}>Click me!</button>
        )
    }
}

export default GoodButton;