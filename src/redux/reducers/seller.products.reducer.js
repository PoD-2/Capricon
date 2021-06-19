import { sellerProductConstants } from '../constants';

const initialState = {};

export function sellerProducts(state = initialState, action) {
    switch (action.type) {
        case sellerProductConstants.ADD_REQUEST:
            return {
                ...state,
                loading: true
            };
        case sellerProductConstants.ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.products
            };
        case sellerProductConstants.ADD_FAILURE:
            return {
                ...state,
                loading: false,
                products: []
            };
        case sellerProductConstants.REMOVE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case sellerProductConstants.REMOVE_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.products
            };
        case sellerProductConstants.REMOVE_FAILURE:
            return {};
        case sellerProductConstants.VIEW_REQUEST:
            return {
                ...state,
                loading: true
            };
        case sellerProductConstants.VIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.products
            };
        case sellerProductConstants.VIEW_FAILURE:
            return {};
        default:
            return state
    }
}