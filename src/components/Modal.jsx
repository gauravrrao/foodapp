import React,{useState,useContext} from 'react'
import './modal.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { appreactor } from '../Context'
import {NavLink} from "react-router-dom"

const Modal = ({ open, Close }) => {

  let [count, setcount] = useState(1)

  const {medit, setmedit} = useContext(appreactor)
  if (!open) return null

  let sub=()=>{
    setcount(count--)
  }

  return (
    <>
    {
      medit.map((cur)=>{
        return   <div className='overlay'>
        <div className='modal-container'>
          <h3 className='modalhead'>Order Summary</h3>
          <div className="item">
            {
              medit.map((cur)=>{
                return<div className='rekha'>
                  <div className="taken">
                <p className="taken">{cur.name}</p>
                </div>
                <p className='mmp'>{count}</p>
                <button className='cbtn' onClick={sub}><RemoveIcon /></button>
                
                <button className='cbtn2' onClick={()=>setcount(count++)}><AddIcon /></button>
                </div>
                
              })
            }
           
          </div>
          <div className="total">
            <p>
            Total Price = 
            {
           medit.map(cur => cur.price).reduce((total,value) => total + value,0) 
        }
            </p>
          </div>
          <div className="checkout">
          <NavLink to="/check"><button className='s1'>SAVE AND CHECKOUT</button></NavLink>  
            <button className='s2' onClick={Close}>CANCEL</button>
          </div>
        </div>
      </div>
      })
    
    }
    
    </>
  )
}

export default Modal