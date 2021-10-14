import React from 'react';
import { useSelector } from 'react-redux';
import StoreProduct from './StoreProduct';

const selectProducts = state => state.products.products;

const StoreProductsCollection = ({ filter }) => {

  const products = useSelector(selectProducts)
  
  const filtredProducts = products.filter(product => {
    const filterLength = filter.length
    if(product.head.slice(0, filterLength).toLowerCase() === filter.toLowerCase() || product.shape.slice(0, filterLength).toLowerCase() === filter.toLowerCase()) {
      return product
    }
    return null
  })

  return (
    <div className="StoreProductsCollection">
      {filter === "" ? products.map(product => <StoreProduct key={product.id} product={product}/>) : 
        filtredProducts.length === 0 ? (<h2>No products found</h2>) : filtredProducts.map(product => <StoreProduct key={product.id} product={product}/>)
      }
    </div>
  )
}

export default StoreProductsCollection
