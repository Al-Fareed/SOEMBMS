import React from 'react'
import {NavLink} from 'react-router-dom'
const Login = () => {
    const handleLogin = (event) => {
        console.log('');
        
    }
  return (
    <NavLink to='/Home'><button onClick={handleLogin}>Login</button></NavLink>
  )
}

export default Login