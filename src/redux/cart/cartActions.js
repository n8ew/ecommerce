export const addToCart = element => {
    return {
        type: "cart/addToCart",
        payload: element
    }
}

export const removeItem = id => {
    return {
        type: "cart/removeItem",
        payload: id
    }
}

export const updateItem = item => {
    return {
        type: "cart/updateItem",
        payload: item
    }
}