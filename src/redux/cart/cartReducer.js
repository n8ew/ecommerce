const initialState = []

const cartReducer = (state = initialState, action) => {
    switch(action.type) {

        case "cart/addToCart" : 

            return [
                ...state,action.payload
            ]
            
        case "cart/removeItem" :

            return state.filter(i => i.id !== action.payload)

        case "cart/updateItem" :

            return state.map(i => {
                if(i.id === action.payload.id) {
                    return action.payload
                } 
                return i
            })
        

        default:
            return state

    }
}

export default cartReducer