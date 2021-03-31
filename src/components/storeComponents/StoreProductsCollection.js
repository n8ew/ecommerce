import React from 'react';
import { useSelector } from 'react-redux';
import StoreProduct from './StoreProduct';

const selectProducts = state => state.products.products;

const StoreProductsCollection = () => {

  const products = useSelector(selectProducts)

  return (
    <div className="StoreProductsCollection">
      {products.map(product => <StoreProduct key={product.id} product={product}/>)}
    </div>
  )
}

export default StoreProductsCollection
