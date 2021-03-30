import React from 'react'
import { useHistory } from 'react-router-dom'  
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart/cartActions'
import '../../style/itemPage.css'

const setProduct = state => state.products.product

const ItemPage = () => {

    const dispatch = useDispatch()
    const product = useSelector(setProduct)
    const history = useHistory()

    const handleClick = () => {
        dispatch(addToCart(product))
        history.push('/cart')
    }

    return (
        <div id="itemPage">
            <div className="top">
                <div className="imageBox">
                    <div className="img" style={{backgroundColor: `${product.color}`}}></div>
                </div>
                <div className="detalesBox">
                    <h2>{product.head}</h2>
                    <h3>Price: £{product.price}</h3>
                    <button onClick={ handleClick }>BUY</button>
                </div>
            </div>
            <div className="bottom">
                <p>{product.body}</p>
            </div>
        </div>
    )
}

export default ItemPage
