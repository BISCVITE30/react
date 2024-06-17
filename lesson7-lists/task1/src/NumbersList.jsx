import React, { Component } from "react";

class NumbersList extends Component {
    constructor(props){
        super(props);

        this.state = {
            numbers: props.numbers,
        }
    }

    render(){
        return (
          <ul>
            <li>{this.state.numbers[0]}</li>
            <li>{this.state.numbers[1]}</li>
            <li>{this.state.numbers[2]}</li>
            <li>{this.state.numbers[3]}</li>
            <li>{this.state.numbers[4]}</li>
          </ul>
        );
    }
}

export default NumbersList;