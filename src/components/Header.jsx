import React from 'react'
import './header.css'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from 'react-router-dom'


const Header = () => {

  

  return (
    <div className='header'>
          
        <div className="hc">
        <RestaurantIcon />
        <NavLink className="head" to="/main"> <h2>Food's Restaurant</h2></NavLink>
        </div>
        
    <div className="jk">
        <NavLink to="/cart"><ShoppingCartIcon className='cart' /></NavLink>
        
       
        </div>
    </div>
  )
}

export default Header