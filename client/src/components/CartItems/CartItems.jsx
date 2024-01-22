import React, { useContext } from 'react'
import remove_icon from '../Assets/cart_cross_icon.png'
import './cartitems.css'
import { ShopContext } from '../../context/ShopContext'
const CartItems = () => {

    const {all_product, cartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
            <hr />

            {all_product.map((e)=>{
                if (cartItems[e.id] > 0 ) {
                    return  <div>
                    <div className='cartitems-format'>
                        <img className='carticon-product-icon' src={e.image} alt="" />
                        <p>{e.name}</p>
                        <p>#{e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>{e.new_price*cartItems[e.id]}</p>
                        <img src={remove_icon} onClick={()=> {removeFromCart(e.id)} } alt="" />
                    </div>
                    <hr />

                </div>
                }
            })}
        </div>
    </div>
  )
}

export default CartItems