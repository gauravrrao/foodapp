import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './menu.css'
import Template from './Template';
import Feeds from './Feeds'

// function ncard(val){
//     return(
//         <Template
//             name={val.name}
//             price={val.price}
//             image={val.image}
//             />
//     )
// }

const Menu = () => {
  return (
    <div className='menu-body'>
        {/* {Feeds.map(ncard)} */}
        <Template />
        
    </div>
  )
}

export default Menu