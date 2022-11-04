import React,{useContext,useState} from 'react'
import './cart.css'
import {appreactor} from '../Context'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Modal from './Modal';

const Cart = () => {
  const {cart,setcart,medit, setmedit} = useContext(appreactor)

  let reject = (ind) => {
    let newarr = cart.filter((id)=>{
       return( id.id != ind)
     })
     setcart(newarr)
 }
 let hollow=(cur)=>{
  setopenmodel(true)
  setmedit([...medit,{...cur,quantity:1}])
 }
 

 const [openmodel, setopenmodel] = useState(false)

  return (
    <div className='cart-body'>
      
      {cart.map((cur)=>{
      return <div className="card">
      <div className="image">
      <img className="image" src={cur.image} alt="" />
      </div>
       <p className='mp'>{cur.name}</p>
       <p className='mp'>Price : {cur.price}</p>
       <p className='mp'>Cost(INR) : {cur.price}</p>
       <div className="addsub">
          <button className='cbtn' onClick={()=>{hollow(cur)}}><AddIcon /></button>
          <button className='cbtn2'  onClick={()=>{reject(cur.id)}}><RemoveIcon /></button>
       </div>
  </div>
    })
       
      }
        <Modal open={openmodel} Close={()=>setopenmodel(false)}/>
    </div>
  )
}

export default Cart