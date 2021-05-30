import React from 'react';
import FriendListItem from './FriendListItem/FriendListItem';
import s from './FriendList.module.css';
import defaultPic from "../../pics/defaultAvatar.jpeg";
import PropTypes from "prop-types";



const FriendList = ( {friends} ) => (
  <ul className={s.friendList}>
      {friends.map(friend =>
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
      )}
  </ul>
);

export default FriendList;

FriendList.defaultProps = {
  avatar: defaultPic,
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired
        })
    )};

