import { SET_CURRENT_PRODUCT } from './types'

export const setCurrentProduct = (id) => {
    return {
        type: SET_CURRENT_PRODUCT,
        id
    }
}
