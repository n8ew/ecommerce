// const initialState = {
//     items: []
// }
const initialState = []

const cartReducer = (state = initialState, action) => {
    switch(action.type) {

        case "cart/addToCart" : 

            // return {
            //     state,
            //     items: [...state.items, action.payload]
            // }
            return [
                ...state,action.payload
            ]
            
        case "cart/removeItem" :

            // return {
            //     ...state,
            //     items: state.items.filter(item => item.id !== action.payload)
            // }
            return state.filter(i => i.id !== action.payload)

        case "cart/updateItem" :

            // return {
            //     ...state,
            //     items: state.items.filter(item => {
            //         if(item.id === action.payload.id) {
            //             return action.payload
            //         } else {
            //             return item
            //         }
            //     })
            // }
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