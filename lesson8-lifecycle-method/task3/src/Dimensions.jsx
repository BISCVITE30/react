import React, { Component } from 'react';

class Dimensions extends Component {
    constructor(){
        super();

        this.state = {
            width:  window.innerWidth,
            height: window.innerHeight
        }
    }

    componentDidMount(){
        window.addEventListener('resize', this.onResize)
    }

    componentWillUnMount(){
        window.removeEventListener('resize', this.onResize)
    }
    
    onResize = e => {
        const { innerHeight, innerWidth } = e.target;
        
        this.setState({
            width: innerWidth,
            height: innerHeight,
        });
    }
    
  render() {
    return <div className="dimensions">{this.state.height} x {this.state.width}</div>;
  }
}

export default Dimensions;
