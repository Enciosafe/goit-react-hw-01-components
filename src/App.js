import React from 'react';
import Profile from './components/Profile/Profile';
import user from './common/user.json';
import statisticalData from './common/statistical-data.json';
import Statistics from './components/Statistics/Statistics';

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
    </div>
  );
};

export default App;
