import React, { useState } from 'react'

const CartItem = ({ item }) => {
    
    

    return (
        <li id="cartItem">
            <div className="img" style={{ backgroundColor: `${item.color}`}}></div>
            <h3>{ item.head }</h3>
            <div className="numbers">
                <h5>Price: { item.price }</h5>
                <div className="quantity">
                    <label htmlFor="quantity">Quantity:</label>
                    <input name="quantity" type="number" />
                </div>
            </div>
            <h4>Total: { item.quantity * item.price }</h4>
            <i className="material-icons">clear</i>
        </li>
    )
}

export default CartItem
