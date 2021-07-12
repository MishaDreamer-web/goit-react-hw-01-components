import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.scss';

const TransactionItem = ({ currency, amount, id, type }, i) => {
  const tableRowClassName = i % 2 === 1 ? styles.grey : styles.white;

  return (
    <tr key={id} className={tableRowClassName}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

const TransactionBody = ({ bodyItems }) => {
  if (!bodyItems) return null;
  return (
    <tbody className={styles.tableBody}>{bodyItems.map(TransactionItem)}</tbody>
  );
};

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <TransactionBody bodyItems={items} />
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
