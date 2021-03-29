import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/shop">Shop</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  )
}

export default Navbar

