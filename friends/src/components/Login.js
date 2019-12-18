import React, {useState} from 'react';
import { axiosAuth } from '../utils/axiosAuth';


export const Login = props => {
    
    const [isLoading, setIsLoading] = useState(false)
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
        setIsLoading(true)
        axiosAuth()
            .post('/login', credentials)
            .then(res => {
                console.log('login res',res)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/friends');
            })
            .catch(err=> console.log('login error',err))
            .finally(()=>{
                return(
                    setIsLoading(false),
                    setCredentials({
                        username: '',
                        password: ''
                    })

                )
            })
    }
    return (
        <div>
            <form onSubmit={login}>
                <input type='text' name='username' placeholder='Username' onChange={handleChange} value={credentials.username}/>
                <input type='password' name='password' placeholder='Password' onChange={handleChange} value={credentials.password}/>
                <button disabled={isLoading} type='submit'>{isLoading ? 'Loading...' : 'Login'}</button>
            </form>
        </div>
    )
}