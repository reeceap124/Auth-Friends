import React, {useState} from 'react';


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
        
    }
    return (
        <div>
            <form>
                <input type='text' name='username' placeholder='Username' onChange={handleChange}/>
                <input type='password' name='password' placeholder='Password' onChange={handleChange}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}