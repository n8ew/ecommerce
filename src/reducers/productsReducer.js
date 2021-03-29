const initialState = {
    products: [
        {id: 1, head: 'Red squer', body: 'This is red squer. Red is super cool', price: 1, color: 'red'},
        {id: 2, head: 'Blue squer', body: 'This is blue squer. Blue is super cool', price: 2, color: 'blue'},
        {id: 3, head: 'Orange squer', body: 'This is orange squer. Orange squer is super cool', price: 1.25, color: 'orange'},
        {id: 4, head: 'Green squer', body: 'This is green squer. Green is super cool', price: 0.75, color: 'green'},
        {id: 5, head: 'Blcak squer', body: 'This is black squer. Black is super cool', price: 1, color: 'black'},
        {id: 6, head: 'Pink squer', body: 'This is pink squer. Pink is super cool', price: 2.25, color: 'pink'},
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