export const addToCart = (element, total) => {
    return {
        type: "cart/addToCart",
        payload: {
            item: element,
            total
        }
    }
}

export const removeItem = (id, itemTotal) => {
    return {
        type: "cart/removeItem",
        payload: {
            id,
            total: itemTotal
        }
    }
}