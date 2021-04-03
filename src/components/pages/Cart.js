import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCheckoutMsg } from '../../redux/ui/uiActions'
import CartItem from '../CartComponents/CartItem'
import CheckOutMsg from '../ui/CheckOutMsg'
import '../../style/cartStyle.css'

const getCartItems = state => state.cart

const Cart = () => {

  const cartItems = useSelector(getCartItems)
  const dispatch = useDispatch()

  const cartItemList = cartItems.length > 0 ?cartItems.map(item => (<CartItem item={item} key={item.id} />)) : (<li className="empty">Your cart is empty...</li>)

  const getTotal = () => {
    let total = 0
    cartItems.map(item => total += item.total)
    return total
  }
  const handleClick = () => {
    dispatch(setCheckoutMsg())
  }

  return (
    <div id="cart">
      <div className="container">
        <ul>
          {cartItemList}
        </ul>
        <h3 className="total">Total: £{ getTotal() } </h3>
        <button onClick={ handleClick } >Checkout</button>
      </div>
      <CheckOutMsg />
    </div>
  )
}

export default Cart
