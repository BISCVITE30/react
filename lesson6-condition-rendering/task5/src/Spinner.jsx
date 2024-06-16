import React, { Component } from "react";

class Spinner extends Component{
    render(){
        const { size } = this.props
        return <span style={{ height: size,width: size }} className="spinner"></span>;
    }
}

export default Spinner;