import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import StoreProduct from './StoreProduct'

const StoreProductsCollection = ({ products }) => {
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

StoreProductsCollection.propTypes = {
    products: PropTypes.array.isRequired
  }
  
  const mapStateToProps = (state) => {
    return {
      products: state.products.products
    }
  }

export default connect(mapStateToProps)(StoreProductsCollection)
