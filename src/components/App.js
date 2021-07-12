import React from 'react';

import Profile from './Social-link-profile';
import Statistics from './Statistics';
import FriendsList from './FriendList';
import TransactionHistory from './Transaction';

import userData from '../data/user.json';
import statsData from '../data/statistical-data.json';
import friendsData from '../data/friends.json';
import transactionsData from '../data/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics tittle="Upload stats" items={statsData} />
      <FriendsList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </>
  );
};

export default App;
