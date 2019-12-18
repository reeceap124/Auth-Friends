import React, {useState} from 'react';
import {axiosAuth} from '../utils/axiosAuth';

export const NewFriend = props => {
    const [id, setId] = useState(7)
    const [newFriend, setNewFriend] = useState({
        id: id,
        name: '',
        age: '',
        email: ''
    })
    const handleChange= e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }


    const addNew = e => {
        e.preventDefault();
        axiosAuth()
            .post('/friends', newFriend)
            .then(res => {
                console.log('add res',res);
                props.setFriends([])
                props.setFriends(u => [...u, ...res.data])
            })
            .catch(err=> console.log('add error',err))
            .finally(()=>{
                return(
                    setId(()=>id+1)
                )
            })
            
            
    }


    return (
        <form onSubmit={addNew}>
            <input name='name' placeholder='name' onChange={handleChange} value={newFriend.name}/>
            <input type='number' name='age' placeholder='age' onChange={handleChange} value={newFriend.age}/>
            <input type='email' name='email' placeholder='valid email' onChange={handleChange} value={newFriend.email}/>
            <button type='submit'>Add</button>
        </form>
    )
}