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
                console.log(res)
            })
            .catch(err=> console.log(err))
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
                <input type='text' name='username' placeholder='Username' onChange={handleChange}/>
                <input type='password' name='password' placeholder='Password' onChange={handleChange}/>
                <button disabled={isLoading} type='submit'>{isLoading ? 'Loading...' : 'Login'}</button>
            </form>
        </div>
    )
}