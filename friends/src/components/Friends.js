import React, {useState, useEffect} from 'react';
import {axiosAuth} from '../utils/axiosAuth';

const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log('get res', res)
        })
        .catch(err => {
            console.log('get error', err)
        })
    })

    return (
        <div>

        </div>
    )
}