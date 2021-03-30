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
    <div className="product" style={styles}>
      <div className="squer" style={{ width: "100px", height: "100px", backgroundColor: `${product.color}` }}></div>
        <h4>{product.head}</h4>
        <h6>Price: {product.price}</h6>
        <button onClick={ handleClick } >Click</button>
    </div>
  )
}

const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

export default StoreProduct
