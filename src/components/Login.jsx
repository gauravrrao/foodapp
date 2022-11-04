import React,{useNavigate,useState} from 'react'
import './login.css'
import {NavLink} from 'react-router-dom'

const Login = () => {

 


  return <div className='loginup'>
      <div className="box">
      <h3>Sign In</h3>
      <div className="namecon">
        <p className='rm'>Email : </p> <input type="text"  placeholder='Name' className='firstsign'/>
      </div>
      <div className="namecon">
      <p className='rm'>Password : </p> <input type="password"  placeholder='password' className='secondsign'/>
      </div>
      <NavLink to='/main'><button >Sign in</button></NavLink>
      <NavLink className="p" to="/signup"><p>Sign Up ?</p></NavLink>
      </div>
    </div>
}

export default Login