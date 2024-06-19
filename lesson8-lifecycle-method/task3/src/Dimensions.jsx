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
        this.setDimentions(innerWidth, innerHeight);
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
        document.title = `${innerWidth} x ${innerHeight}`

    }
    
  render() {
    return <div className="dimensions">{this.state.width} x {this.state.height}</div>;
  }
}

export default Dimensions;
