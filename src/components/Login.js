import React, { useState} from 'react'
import {api_login} from '../api_calls'

export default function Login({setToken}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleFormSubmit = (e) => {

        e.preventDefault()
        getToken()
    }

    const getToken = async () => {
        const token = await api_login(email, password)
        console.log(token)
        if(token.token){
            setToken(token.token)
            resetInputs()
        }else{
            setError(true)
            resetInputs()
        }
    }
    const resetInputs = () => {
        setPassword('')
        setEmail('')
    }

    return (
        <div className='login-window'>

            <h2>Log in</h2>
            <form onSubmit={e => handleFormSubmit(e)}>
                <label>email</label>
                <input 
                    name='email' 
                    type='email'
                    required
                    onChange={e => setEmail(e.target.value)}
                    value={email} />

                <label>password</label>
                <input 
                    onChange={e => setPassword(e.target.value)}
                    required
                    type='password'
                    name='password' 
                    value={password}/>

                <input 
                    className='custom-btn'
                    type='submit'/>

                <p className='error-msg'>
                    {
                        error ? 'wrong details':''
                    }
                </p>
            </form>
            
        </div>
    )
}
