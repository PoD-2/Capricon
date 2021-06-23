import { wishlistConstants } from '../constants';

const initialState = {};

export function userWishlist(state = initialState, action) {
    switch (action.type) {
        case wishlistConstants.ADD_REQUEST:
            return {
                ...state,
                loading: true
            };
        case wishlistConstants.ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                wishlist: action.wishlist
            };
        case wishlistConstants.ADD_FAILURE:
            return {
                ...state,
                loading: false,
                cartItems: []
            };
        case wishlistConstants.REMOVE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case wishlistConstants.REMOVE_SUCCESS:
            return {
                ...state,
                loading: false,
                wishlist: action.wishlist
            };
        case wishlistConstants.REMOVE_FAILURE:
            return {};
        case wishlistConstants.VIEW_REQUEST:
            return {
                ...state,
                loading: true
            };
        case wishlistConstants.VIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                wishlist: action.wishlist
            };
        case wishlistConstants.VIEW_FAILURE:
            return {};
        default:
            return state
    }
}