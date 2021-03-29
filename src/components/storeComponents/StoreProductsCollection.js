import React from 'react';
import { useSelector } from 'react-redux';
import StoreProduct from './StoreProduct';

const selectProducts = state => state.products.products;

const StoreProductsCollection = () => {

  const products = useSelector(selectProducts)

  return (
    <div style={grid}>
      {products.map(product => <StoreProduct key={product.id} product={product}/>)}
    </div>
  )
}

const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)"
}

export default StoreProductsCollection
