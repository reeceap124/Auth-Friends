import React from 'react';
import { FriendCard } from './FriendCard';

export const FriendsList = props => {
    return (
        <div>
            {props.friends.map(friend => {
                return <FriendCard key={friend.id} friend={friend}/>
            })}
        </div>
    )
}