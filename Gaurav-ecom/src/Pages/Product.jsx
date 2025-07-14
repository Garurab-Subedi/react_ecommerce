import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Bredcrums from '../Components/Bredcrums/Bredcrums';
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === parseInt(productId));
  return (
    <div>
      <Bredcrums product = {product} />
      <ProductDisplay product = {product} />
      <Description />
    </div>
  )
}

export default Product