import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const ItemPage = ({ product }) => {

    return (
        <div>
            this is item
            <h3>{product.head}</h3>
        </div>
    )
}

ItemPage.propTypes = {
    product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
   return {
       product: state.products.product
   }
}

export default connect(mapStateToProps)(ItemPage)
