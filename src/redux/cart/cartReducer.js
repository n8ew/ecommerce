const initialState = {
    items: [],
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {

        case "cart/addToCart" : 
            return {
                state,
                items: [...state.items, action.payload]
            }
        
            
        case "cart/removeItem" :

            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }

        case "cart/updateItem" :

            return {
                ...state,
                items: state.items.map(item => {
                    if(item.id === action.payload.id) {
                        return action.payload
                    } else {
                        return item
                    }
                })
            }
        

        default:
            return state

    }
}

export default cartReducer