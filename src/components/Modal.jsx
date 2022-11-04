import React, { useState, useContext, useEffect } from 'react'
import './modal.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { appreactor } from '../Context'
import { NavLink } from "react-router-dom"

const Modal = ({ open, Close }) => {



  const { cart, setcar, medit, setmedit } = useContext(appreactor)
  let [CART, setCART] = useState([])

  useEffect(() => {
    setCART(medit)


  }, [medit])


  if (!open) return null




  return (
    <>

      <div className='overlay'>
        <div className='modal-container'>
          <h3 className='modalhead'>Order Summary</h3>
          <div className="item">
            {
              CART?.map((cur, cartindex) => {
                return <div className='rekha'>
                  <div className="taken">
                    <p className="taken">{cur.name}</p>
                  </div>
                  <p className='mmp'>{cur.quantity}</p>


                  <div className="modalbutton">
                    <button className='cbtn' onClick={() => {
                      let _CART = CART.map((item, index) => {
                        return cartindex === index ? { ...item, quantity: item.quantity - 1 } : item
                      })
                      setCART(_CART)

                    }} ><RemoveIcon /></button>
                    <button className='cbtn2' onClick={() => {
                      let _CART = CART.map((item, index) => {
                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                      })
                      setCART(_CART)
                    }} ><AddIcon /></button>
                  </div>

                </div>
 
              })
            }

          </div>
          <div className="total">
            <p>
              Total Price =
              {
                CART.map(cur => cur.price * cur.quantity).reduce((total, value) => total + value, 0)
              }
            </p>
          </div>
          <div className="checkout">
            <NavLink to="/check"><button className='s1'>SAVE AND CHECKOUT</button></NavLink>
            <button className='s2' onClick={Close}>CANCEL</button>
          </div>
        </div>
      </div>




    </>
  )
}

export default Modal