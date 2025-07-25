import React from 'react'
import './NewCollection.css'
import new_collections from '../../assets/newcollections'
import Items from '../Items/Items'
const NewCollection = () => {
  return (
    <div className='newcollections'>
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item, i) => {
                return <Items key={i} id={item.id} name={item.name} image={item.image} 
                new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollection