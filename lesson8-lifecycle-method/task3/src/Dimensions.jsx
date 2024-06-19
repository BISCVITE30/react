import React, { Component } from 'react';

class Dimension extends Component {
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
    return <div className="dimensions">{this.state.height}px - {this.state.width}px</div>;
  }
}

export default Dimension;
