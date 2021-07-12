import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendsList.module.scss';

const FriendsListItem = ({ id, avatar, name, isOnline }) => {
  const status = isOnline ? styles.online : styles.offline;

  return (
    <li key={id} className={styles.item}>
      <span className={status}></span>
      <img className={styles.avatar} src={avatar} alt="{name}" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

const FriendsList = ({ friends }) => {
  if (!FriendsList) return null;
  return <ul className={styles.friendsList}>{friends.map(FriendsListItem)}</ul>;
};

FriendsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

FriendsListItem.defaultProps = {
  avatar: 'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
};

export default FriendsList;
