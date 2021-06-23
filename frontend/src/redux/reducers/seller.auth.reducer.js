import { sellerAuthConstants } from '../constants';

let seller = JSON.parse(localStorage.getItem('seller'));
let tempSeller = JSON.parse(sessionStorage.getItem('seller'));
const initialState = tempSeller ? { loggedIn: true, seller: tempSeller } : seller ? { loggedIn: true, seller: seller } : {};

export function sellerAuth(state = initialState, action) {
    switch (action.type) {
        case sellerAuthConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case sellerAuthConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                seller: action.seller
            };
        case sellerAuthConstants.LOGIN_FAILURE:
            return {};
        case sellerAuthConstants.LOGOUT:
            return {};
        case sellerAuthConstants.REGISTER_REQUEST:
            return {
                    ...state,
                    loading: true
                };
        case sellerAuthConstants.REGISTER_SUCCESS:
            return {
                   ...state,
                   loading: false,
                   loggedIn: true,
                   seller: action.seller
                };
        case sellerAuthConstants.REGISTER_FAILURE:
            return {}; 
        default:
            return state
    }
} 