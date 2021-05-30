import React from 'react';
import s from './FriendListItem.module.css';


const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return <li
      key={id}
      className={s.item}
      style={{ color: `${isOnline ? 'green' : 'tomato'}` }}>
      <span className={s.status}>{isOnline ? 'on' : 'off'}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>;
};

export default FriendListItem;


