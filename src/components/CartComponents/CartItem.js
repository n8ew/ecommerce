import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem, updateItem } from '../../redux/cart/cartActions'


const CartItem = ({ item }) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(removeItem(item.id))
    }
    const addToQuantity = () => {
        item.quantity += 1
        item.total += item.price 
        dispatch(updateItem(item))
    }
    const subtrackFromQuantity = () => {
        if(item.quantity === 1) {
            dispatch(removeItem(item.id))
        } else {
            item.quantity -= 1
            item.total -= item.price 
            dispatch(updateItem(item))
        }
    }

    return (
        <li id="cartItem">
            <div className="img" style={{ backgroundColor: `${item.color}`}}></div>
            <h3>{ item.head }</h3>
            <div className="numbers">
                <h5>Price: { item.price }</h5>
                <div className="quantity">
                    <h5>Quantity: { item.quantity }</h5>
                    <div className="changeBox">
                        <i className="material-icons icon" onClick={ addToQuantity }>arrow_drop_up</i>
                        <i className="material-icons icon" onClick={ subtrackFromQuantity }>arrow_drop_down</i>
                    </div>
                </div>
            </div>
            <h4>Total: { item.total }</h4>
            <i className="material-icons remove" onClick={ handleClick }>clear</i>
        </li>
    )
}

export default CartItem
