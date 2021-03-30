const initialState = []

const cartReducer = (state = initialState, action) => {
    switch(action.type) {

        case "cart/addToCart" :
            return [
                ...state,
                action.payload
            ]

        default:
            return state

    }
}

export default cartReducer