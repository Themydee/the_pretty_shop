import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development'
import Breadcrum from '../components/Breadcrums/Breadcrum'
import Display from '../components/productDisplay/Display'
import Descriptionbox from '../components/DescriptionBox/Descriptionbox'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId) )
  return (
    <div>
      <Breadcrum product={product}/>
      <Display product={product}/>
      <Descriptionbox />
      <RelatedProducts />
    </div>
  )
}

export default Product