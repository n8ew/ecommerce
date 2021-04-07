import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'  
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, updateItem } from '../../redux/cart/cartActions'
import '../../style/itemPage.css'

const setProduct = state => state.products.product
const getCartItems = state => state.cart

const ItemPage = () => {

    const [quantity,setQuantity] = useState(1)

    const dispatch = useDispatch()
    const product = useSelector(setProduct)
    const cartItems = useSelector(getCartItems)
    const history = useHistory()

    const handleClick = () => {

        if(quantity > 0) {

            const total = quantity * product.price
            product.total = total
            product.quantity = quantity


            const itemToCheck = cartItems.filter(i => i.id === product.id)
            if(itemToCheck.length === 0) {
                dispatch(addToCart(product))
                history.push('/cart')
            } else {
                dispatch(updateItem(itemToCheck[0]))
                history.push('/cart')
            }

        }

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
                    <div className="detale_heading">
                        <h2>{product.head}</h2>
                        <h3>Price: £{product.price}</h3>
                    </div>
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
