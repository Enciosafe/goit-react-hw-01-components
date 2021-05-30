import React from 'react';
import s from './TransactionHistory.module.css'
import TransactionItem from "./TransactionItem/TransactionItem";
import PropTypes from "prop-types";

const TransactionHistory = ({items}) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.type}>Type</th>
          <th className={s.amount}>Amount</th>
          <th className={s.currency}>Currency</th>
        </tr>
      </thead>

      <tbody>
            {items.map(({id, type, amount, currency}) =>
            <TransactionItem
                key={id}
                type={type}
                amount={amount}
                currency={currency}
                />
            )}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    )};
