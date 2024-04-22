
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    //const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
       axios.post('http://localhost:4001/login', {
                
                email,
                password
            })
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate('/home')
            }
       
        })
            
         .catch (err => console.log(err))
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                   
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter your email' autoComplete='off' name='email' className='form-control rounded-0'
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter password' autoComplete='off' name='password' className='form-control rounded-0'
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type='submit' className='btn btn-success'>Login</button>
                </form>
                <p>Don't have an account?</p>
                <Link to='/register' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Sign Up</Link>
            </div>
        </div>
    );
}

export default Login;
