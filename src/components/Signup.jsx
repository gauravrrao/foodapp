import React,{useState} from 'react'
import './signup.css'
import { auth } from './Firebase'
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import { async } from '@firebase/util'
import {NavLink, useNavigate} from 'react-router-dom'


const Signup = () => {
  let navigate=useNavigate
  const [values, setValues] = useState({
    name:"",
    email:"",
    pass:""
  })
  let handelsubmission=()=>{
    createUserWithEmailAndPassword(auth,values.email,values).then(async(res)=>{
      let user=res.user
     await updateProfile(user,{
        displayName:values.name,
      })
      navigate('/main')
    }).catch((err)=>{console.log(err)})
  }

  return (
          <>
          <div className="signup">
            <div className="boxs">
            <h3>Sign Up</h3>
      <div className="namecon">
        <p className='rm'>Name : </p> <input type="text"  onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }  placeholder='Name' className='firstsign'/>
      </div>
      <div className="namecon">
      <p className='rm'>Password : </p> <input type="password"  onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          } placeholder='password' className='secondsign'/>
      </div>
      <div className="namecon">
      <p className='rm'> Confirm Password : </p> <input type="password"   onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          } placeholder='password' className='secondsign'/>
      </div>
     <NavLink to="/login"><button >Sign Up</button></NavLink> 
            </div>
          </div>
          </>
  )
}

export default Signup