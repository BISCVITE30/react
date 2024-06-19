import React, { Component } from 'react';

class Dimensions extends Component {
    constructor(){
        super();

        this.state = {
            width:  null,
            height: null
        }
    }

    componentDidMount(){
        window.addEventListener('resize', this.onResize)

        const { innerWidth, innerHeight } = window;
        this.setDimentions(innerHeight, innerWidth);
    }

    componentWillUnMount(){
        window.removeEventListener('resize', this.onResize)
    }
    
    onResize = e => {
        const { innerWidth, innerHeight } = e.target;
        this.setDimentions(innerWidth, innerHeight);
    }

    setDimentions = (width, height) => {
        this.setState({
            width,
            height,
        });
        document.title = `${innerHeight} x ${innerWidth}`

    }
    
  render() {
    return <div className="dimensions">{this.state.height} x {this.state.width}</div>;
  }
}

export default Dimensions;
