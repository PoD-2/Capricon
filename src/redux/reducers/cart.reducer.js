import { cartConstants } from '../constants';

const initialState = {};

export function userCart(state = initialState, action) {
    switch (action.type) {
        case cartConstants.ADD_REQUEST:
            return {
                ...state,
                loading: true
            };
        case cartConstants.ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: action.cartItems
            };
        case cartConstants.ADD_FAILURE:
            return {
                ...state,
                loading: false,
                cartItems: []
            };
        case cartConstants.REMOVE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case cartConstants.REMOVE_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: action.cartItems
            };
        case cartConstants.REMOVE_FAILURE:
            return {};
        case cartConstants.VIEW_REQUEST:
            return {
                ...state,
                loading: true
            };
        case cartConstants.VIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: action.cartItems
            };
        case cartConstants.VIEW_FAILURE:
            return {};
        default:
            return state
    }
}