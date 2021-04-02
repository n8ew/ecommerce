import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'  
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart/cartActions'
import '../../style/itemPage.css'

const setProduct = state => state.products.product

const ItemPage = () => {

    const [quantity,setQuantity] = useState(1)

    const dispatch = useDispatch()
    const product = useSelector(setProduct)
    const history = useHistory()

    const handleClick = () => {
        const total = quantity * product.price
        product.total = total
        product.quantity = parseInt(quantity)
        dispatch(addToCart(product))
        history.push('/cart')
    }
    const addToQuantity = () => {
        setQuantity(quantity + 1)
    }
    const subtrackFromQuantity = () => {
        quantity > 0 && setQuantity(quantity - 1)
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
                    <div className="select">
                        <h3>Quantity: { quantity }</h3>
                        <div className="changeBox">
                            <i className="material-icons" onClick={ addToQuantity }>arrow_drop_up</i>
                            <i className="material-icons" onClick={ subtrackFromQuantity }>arrow_drop_down</i>
                        </div>
                        
                    </div>
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
