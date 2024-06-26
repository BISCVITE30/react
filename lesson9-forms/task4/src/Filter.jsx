import React, { Component } from "react";

class Filter extends Component{
    handleChange = event => {
        this.props.onChange(event.target.value)
    }

    render(){
        return (
          <div className="filter">
            <span className="filter__count">{this.props.count}</span>
            <input type="text" className="filter__input" onChange={this.handleChange} value={this.props.filterText} />
          </div>
        );
    }
}

export default Filter;