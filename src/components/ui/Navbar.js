import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux' 
import CartQuantiti from './CartQuantiti' 
import '../../style/navStyle.css'

const selectCart = state => state.cart

const Navbar = () => {

  const history = useHistory()
  const cartQuantiti = useSelector(selectCart).length

  const handleClick = () => {
    history.push('/shop')
  }

  return (
    <nav>
      <div className="content">
        <h3 onClick={ handleClick }>SQUARE Store</h3>
        <ul>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">
            <i className="material-icons">shopping_cart</i>
            <CartQuantiti numberOfProducts = {cartQuantiti} />
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

