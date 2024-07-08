import React, { useState, useEffect } from 'react';

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(new Date());

  const calculateLocalTime = (date, offset) => {
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    return new Date(utc + 3600000 * offset);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const localTime = calculateLocalTime(time, offset);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{localTime.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;
