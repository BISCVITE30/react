import React, { Component } from 'react';
import Transaction from './Transaction.jsx';

class TransactionList extends Component {
  render() {
    return (
      <ul className="transactions">
        {this.props.transactions.map(transaction => (
          <Transaction
            from={transaction.from}
            to={transaction.to}
            amount={transaction.amount}
            rate={transaction.rate}
            time={transaction.time}
            id={transaction.id}
          />
        ))}
      </ul>
    );
  }
}

export default TransactionList;
