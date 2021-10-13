import React, { useState, useEffect } from 'react'
import SearchBar from '../storeComponents/SearchBar'
import StoreProductsCollection from '../storeComponents/StoreProductsCollection'
import '../../style/shop.css'


const Shop = () => {

  const [filter,setFilter] = useState('')

  return (
    <div className="Shop">
      <SearchBar setFilter={ setFilter } />
      <StoreProductsCollection filter={ filter } />
    </div>
  )
}

export default Shop
