import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartComponents/CartItem'
import '../../style/cartStyle.css'

const getCartItems = state => state.cart.items
const cartTotal = state => state.cart.total

const Cart = () => {

  const cartItems = useSelector(getCartItems)
  const total = useSelector(cartTotal)

  const cartItemList = cartItems.length > 0 ? cartItems.map(item => (<CartItem item={item} key={item.id} />)) : (<li className="empty">Your cart is empty...</li>)

  return (
    <div id="cart">
      <div className="container">
        <ul>
          {cartItemList}
        </ul>
        <h3>Total: { total }</h3>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default Cart
