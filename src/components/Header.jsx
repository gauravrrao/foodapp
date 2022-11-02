import React from 'react'
import './header.css'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {

  const { loginWithRedirect,isAuthenticated } = useAuth0();
  const { logout } = useAuth0();

  return (
    <div className='header'>
          
        <div className="hc">
        <RestaurantIcon />
        <NavLink className="head" to ="/"> <h2>Food's Restaurant</h2></NavLink>
        </div>
        
    <div className="jk">
        <NavLink to="/cart"><ShoppingCartIcon className='cart' /></NavLink>

        {isAuthenticated ? (
          <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>

        ):(
          <button onClick={() => loginWithRedirect()}>Log In</button>

        )
        }       
        </div>
    </div>
  )
}

export default Header