import { sellerOrderConstants } from '../constants';

const initialState = {};

export function sellerOrders(state = initialState, action) {
    switch (action.type) {
        case sellerOrderConstants.VIEW_REQUEST:
            return {
                ...state,
                loading: true
            };
        case sellerOrderConstants.VIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.orders
            };
        case sellerOrderConstants.VIEW_FAILURE:
            return {
                ...state,
                loading: false
            };

        case sellerOrderConstants.VIEW_STATUS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case sellerOrderConstants.VIEW_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                orderStatus: action.orderStatus
            };
        case sellerOrderConstants.VIEW_STATUS_FAILURE:
            return {
                ...state,
                loading: false
            };
        case sellerOrderConstants.CHANGE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case sellerOrderConstants.CHANGE_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.products
            };
        case sellerOrderConstants.CHANGE_FAILURE:
            return {
                ...state
            };
        default:
            return state
    }
}