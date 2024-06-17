import React from 'react';
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM');
const formatHour = date => moment(date).format('HH:MM');

const Transaction = ({ from, to, amount, rate, time, id }) => {
  return (
    <li key={id} className="transaction">
      <span className="transaction__date">{formatDate(time)}</span>
      <span className="transaction__time">{formatHour(time)}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{new Intl.NumberFormat('en-GB').format(rate)}</span>
      <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
    </li>
  );
};

export default Transaction;
