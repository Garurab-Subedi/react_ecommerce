import React from 'react'
import './ProductDisplay.css'
import star_icon from '../../assets/star_icon.png'

const ProductDisplay = (props) => {
     const { product } = props;
  return (
    <div className='productdisplay'>
        <div className="productdiplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" height="200px"/>
                <img src={product.image} alt="" height="200px"/>
                <img src={product.image} alt="" height="200px"/>
                <img src={product.image} alt="" height="200px"/>
                <img src={product.image} alt="" height="200px"/>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" height="500px"/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                 <img src={star_icon} alt="" height="20px"/>
                 <img src={star_icon} alt="" height="20px"/>
                 <img src={star_icon} alt="" height="20px"/>
                 <img src={star_icon} alt="" height="20px"/>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay