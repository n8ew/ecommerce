const initialState = {
    products: [
        {id: 1, head: 'Red square', body: 'This is red square. Red is super cool', price: 1, color: 'red'},
        {id: 2, head: 'Blue square', body: 'This is blue square. Blue is super cool', price: 2, color: 'blue'},
        {id: 3, head: 'Orange square', body: 'This is orange square. Orange square is super cool', price: 1.25, color: 'orange'},
        {id: 4, head: 'Green square', body: 'This is green square. Green is super cool', price: 0.75, color: 'green'},
        {id: 5, head: 'Black square', body: 'This is black square. Black is super cool', price: 1, color: 'black'},
        {id: 6, head: 'Pink square', body: 'This is pink square. Pink is super cool', price: 2.25, color: 'pink'},
    ],
    product: {}
};

const productsSwitch = (state=initialState,action) => {
    switch(action.type) {

        case "SET_CURRENT_PRODUCT":
            return {
                ...state,
                product: action.payload
            }

        default:
            return state
    }
};

export default productsSwitch;