import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';

import styles from './Profile.module.scss';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
};

Profile.defaultProps = {
  location: 'City,Country',
  avatar: 'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
};

export default Profile;
