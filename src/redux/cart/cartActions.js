export const addToCart = element => {
    return {
        type: "cart/addToCart",
        payload: element
    }
}