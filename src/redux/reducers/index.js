import { combineReducers } from 'redux';

import { userAuth } from './user.auth.reducer';
import { alert } from './alert.reducer';
import { sellerAuth } from './seller.auth.reducer';
import { userCart } from './cart.reducer';
import { sellerProducts } from './seller.products.reducer';

const rootReducer = combineReducers({
    userAuth,
    sellerAuth,
    alert,
    userCart,
    sellerProducts
});

export default rootReducer;