import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentProduct } from '../../redux/products/productsActions'
import { useHistory } from 'react-router-dom'

const StoreProduct = ({ product }) => {

  const dispatch = useDispatch()
  const history = useHistory()

  // Define border radius for .producImg
  const borderRadius = () => {
    if(product.shape !== "square") {
      return "50%"
    }
    return "0%"
  }

  const handleClick = () => {
    dispatch(setCurrentProduct(product))
    history.push(`/${product.id}`)
  }

  return (
    <div className="product" onClick={ handleClick }>
      <div className="img">
        <div className="productImg"  style={{ backgroundColor: `${product.color}`, borderRadius: borderRadius() }}></div>
      </div>
      <div className="detales">
        <div className="description">
          <h4>{product.head}</h4>
          <h6>Price: £{product.price}</h6>
        </div>
      </div>
    </div>
  )
}

export default StoreProduct
