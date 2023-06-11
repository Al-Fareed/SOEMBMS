import React from 'react'
import {NavLink} from 'react-router-dom'
const Login = (props) => {
    const handleLogin = (event) => {
        if(!props.loggedIn)
        {
            props.setLoggedIn(true);
        }      
    }
  return (
    <NavLink to='/home'><button onClick={handleLogin}>Login</button></NavLink>
  )
}

export default Login