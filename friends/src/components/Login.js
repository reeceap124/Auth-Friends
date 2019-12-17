import React, {useState} from 'react';
import { axiosAuth } from '../utils/axiosAuth';


export const Login = props => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    const login = e => {
        e.preventDefault();
        axiosAuth()
            .post('/login', credentials)
            .then(res => console.log(res))
            .catch(err=> console.log(err))
    }
    return (
        <div>
            <form onSubmit={login}>
                <input type='text' name='username' placeholder='Username' onChange={handleChange}/>
                <input type='password' name='password' placeholder='Password' onChange={handleChange}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}