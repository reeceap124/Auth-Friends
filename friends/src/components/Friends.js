import React, {useState, useEffect} from 'react';
import {axiosAuth} from '../utils/axiosAuth';
import {FriendsList} from './FriendsList'

export const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        axiosAuth()
        .get('/friends')
        .then(res => {
            console.log('get res', res.data)
            setFriends(u => [...u, ...res.data])
        })
        .catch(err => {
            console.log('get error', err)
        })
    }, [])

    return (
        <div>
            <FriendsList friends={friends}/>
        </div>
    )
}