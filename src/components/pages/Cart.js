import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartComponents/CartItem'
import '../../style/cartStyle.css'

const getCartItems = state => state.cart

const Cart = () => {

  const cartItems = useSelector(getCartItems)

  const cartItemList = cartItems ? cartItems.map(item => (<CartItem item={item} key={item.id} />)) : (<li>Your cart is empty</li>)

  return (
    <div id="cart">
      <div className="container">
        <ul>
          {cartItemList}
        </ul>
          <button>Checkout</button>
      </div>
    </div>
  )
}

export default Cart
