import React,{useState,useContext} from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Feeds from './Feeds';
import { appreactor } from '../Context';

const Template = ({image,price,name}) => {

const [show, setshow] = useState(Feeds)

const {cart,setcart} = useContext(appreactor)

let follow=(cur)=>{
  setcart([...cart,cur])
}
  return (
    <div className='menu-body'>
      
      {show.map((cur)=>{
      return <div className="card">
      <div className="image">
      <img className="image" src={cur.image} alt="" />
      </div>
       <p className='mp'>{cur.name}</p>
       <p className='mp'>{cur.price}</p>
       <div className="addsub">
          <button className='mbtn' onClick={()=>{follow(cur)}}><AddIcon /></button>
          <button className='mbtn2'><RemoveIcon /></button>
       </div>
  </div>
    })
       
      }
        
    </div>
  )
}

export default Template