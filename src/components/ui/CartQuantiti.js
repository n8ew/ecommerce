import React from 'react'

const CartQuantiti = ({ numberOfProducts }) => {

    const number = numberOfProducts > 0 && (
        <div className="holder">
            <p>{numberOfProducts}</p>
        </div>
    )

    return (
        <div className="cartQuantiti">
            {number}
        </div>
    )
}

export default CartQuantiti
