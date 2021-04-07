import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCheckoutMsg } from '../../redux/ui/uiActions'
import { useHistory } from 'react-router-dom'  
import CartItem from '../CartComponents/CartItem'
import CheckOutMsg from '../ui/CheckOutMsg'
import '../../style/cartStyle.css'

const getCartItems = state => state.cart

const Cart = () => {

  const cartItems = useSelector(getCartItems)
  const dispatch = useDispatch()
  const history = useHistory()

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
        <div className="summary">
          <div className="cartInformations">
            <h3>Number of Items: { cartItemList.length }</h3>
            <h3>Total: £{ getTotal() } </h3>
          </div>
          <div className="bottom_line"></div>
          <div className="buttons">
            <button className="backToStore" onClick={() => { history.push('/') }} ><i className="fas fa-caret-left"></i>Back to store</button>
            <button onClick={ handleClick } >Checkout</button>
          </div>
        </div>
      </div>
      <CheckOutMsg />
    </div>
  )
}

export default Cart
