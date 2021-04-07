import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentProduct } from '../../redux/products/productsActions'
import { useHistory } from 'react-router-dom'

const StoreProduct = ({ product }) => {

  const dispatch = useDispatch()
  const history = useHistory()

    const handleClick = () => {
      dispatch(setCurrentProduct(product))
      history.push(`/{product.id}`)
    }

  return (
    <div className="product" onClick={ handleClick }>
      <div className="img">
        <div className="square"  style={{ backgroundColor: `${product.color}` }}></div>
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
