import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/cart/cartActions'

const CartItem = ({ item }) => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        let total = item.price * item.quantity
        dispatch(removeItem(item.id, total))
    }

    return (
        <li id="cartItem">
            <div className="img" style={{ backgroundColor: `${item.color}`}}></div>
            <h3>{ item.head }</h3>
            <div className="numbers">
                <h5>Price: { item.price }</h5>
                <div className="quantity">
                    <h5>Quantity: { item.quantity }</h5>
                </div>
            </div>
            <h4>Total: { item.quantity * item.price }</h4>
            <i className="material-icons" onClick={ handleClick }>clear</i>
        </li>
    )
}

export default CartItem
