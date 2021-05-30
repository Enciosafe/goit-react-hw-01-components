import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import user from './common/user.json';
import statisticalData from './common/statistical-data.json';
import friends from './common/friends.json';
import transactions from './common/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={statisticalData} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};

export default App;
