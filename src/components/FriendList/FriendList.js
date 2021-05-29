import React from "react";
import FriendListItem from "./FriendListItem/FriendListItem";
import s from "./FriendList.module.css"



const FriendList = (props) => (
    <ul className={s.friendList}>
        <FriendListItem friends={props.friends}/>
    </ul>
)


export default FriendList