import React from 'react'
import './main.css'
import {NavLink} from 'react-router-dom'

const Main = () => {
  return (
    <div className='main'>
        <p>Welcome to Food's Kitchen </p>
       <div className="nav">
       <NavLink className="nav" to='/menu'>Go To Menu</NavLink>
       </div>
    </div>
  )
}

export default Main