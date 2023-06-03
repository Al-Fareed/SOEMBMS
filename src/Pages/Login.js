import React from 'react'
import {NavLink} from 'react-router-dom'
const Login = (props) => {
    const handleLogin = (event) => {
        props.setLoggedIn(!props.loggedIn);      
    }
  return (
    <NavLink to='/Home'><button onClick={handleLogin}>Login</button></NavLink>
  )
}

export default Login