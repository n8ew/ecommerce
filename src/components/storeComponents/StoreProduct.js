import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrentProduct } from '../../actions/productsActions'

const StoreProduct = ({ product, setCurrentProduct }) => {

    const handleClick = () => {
      setCurrentProduct(product.id)
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

StoreProduct.propTypes = {
    setCurrentProduct: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentProduct: (id) => dispatch(setCurrentProduct(id))
  }
}

export default connect(mapDispatchToProps)(StoreProduct)
