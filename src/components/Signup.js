import React from 'react'
import { Form, Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div>
        <h1> Signup</h1>
        <Form>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <input type="password" placeholder="Confirm Password"></input>
            <button type= "submit">Signup</button>
        </Form>
        <p> or </p>
        <Link to="/login">Login</Link>
    </div>
  )
}
