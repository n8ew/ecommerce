import { combineReducers } from 'redux';
import productsReducer from './products/productsReducer';
import cartReducer from './cart/cartReducer';
import uiReducer from './ui/uiReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    ui: uiReducer
});

export default rootReducer;