import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

const StatsListItem = ({ id, label, percentage }) => {
  return (
    <li key={id} className={styles.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

const StatsList = ({ items }) => {
  if (!items.length) return null;
  return <ul className={styles.statList}>{items.map(StatsListItem)}</ul>;
};

const Statistics = ({ items, tittle }) => {
  return (
    <section className={styles.statistics}>
      {tittle ? <h2 className={styles.title}>{tittle}</h2> : null}

      <StatsList items={items} />
    </section>
  );
};

StatsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
