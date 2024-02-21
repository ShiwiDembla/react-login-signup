import  { useState } from 'react'
import { Form, Link } from 'react-router-dom'

export default function Login() {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submitted: ' + email + ' ' + password);

    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (

    <div>
        <h1> Login </h1>
        <Form onSubmit={onSubmit}>
            <input type='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input type='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button type='submit'>Login</button>
        </Form>
        <p> or </p>
        <Link to='/'>Signup</Link>
    </div>
  )
}
