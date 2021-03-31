const initialState = {
    items: [],
    total: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {

        case "cart/addToCart" : 
            return {
                state,
                items: [...state.items, action.payload.item],
                total: state.total += action.payload.total
            }
        
            
        case "cart/removeItem" :

            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
                total: state.total -= action.payload.total
            }
        

        default:
            return state

    }
}

export default cartReducer