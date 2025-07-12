import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {prodcutId} = useParams();
  const product = all_product.find((e) => e.id === prodcutId)
  return (
    <div>Product</div>
  )
}

export default Product