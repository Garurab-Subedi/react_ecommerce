import React from 'react'
import './Offers.css'
import exlusive from '../../assets/exclu.webp'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
           <h1>Exclusive Offers for you</h1>
           <p>ONLY ON BEST SELLERS PRODUCTS</p>
           <button>Check Now</button>
         </div>
        <div className="offers-right">
            <img src={exlusive} alt="" />
        </div>
    </div>
    
  )
}

export default Offers