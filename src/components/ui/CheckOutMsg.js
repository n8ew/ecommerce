import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCheckoutMsg } from '../../redux/ui/uiActions'
import '../../style/cartStyle.css'

const CheckOutMsg = () => {

    const dispatch = useDispatch()
    const getCheckoutState = state => state.ui.chekoutMsg
    const checkoutState = useSelector(getCheckoutState)

    return (
        <div className="checkOutMsg" onClick={ () => dispatch(setCheckoutMsg()) } style={checkoutState?{display:'flex'}:{display:'none'}} >
            <div className="content">
                <h3 className="heading">Thank you for shopping with us !</h3>
                <p>Your order is going to be process right now.</p>
                <i className="material-icons">clear</i>
            </div>
        </div>
    )
}

export default CheckOutMsg
