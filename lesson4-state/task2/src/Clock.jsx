import React, { Component } from 'react';
import { getTimeWithOffset } from './getTimeWithOffset';
import './clock.scss';
import moment from 'moment';


const formatDate = date => moment(date).format('h:mm:ss a');

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentTime: formatDate(getTimeWithOffset(this.props.offset)),
    };

    setInterval(() => {
        this.setState({
          currentTime: formatDate(getTimeWithOffset(this.props.offset)),
        });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.currentTime}</div>
      </div>
    );
  }
}

export default Clock;
