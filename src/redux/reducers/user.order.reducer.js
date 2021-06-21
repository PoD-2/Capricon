import { userOrderConstants } from "../constants/user.order.constants";

const initialState = {};

export function userOrders(state=initialState, action){

    switch(action.type){
        case userOrderConstants.VIEW_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userOrderConstants.VIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.orders
            };
        case userOrderConstants.VIEW_FAILURE:
            return {
                ...state,
                loading: false
            };

            case userOrderConstants.VIEW_PREVIOUS_REQUEST:
                return {
                    ...state,
                    loading: true
                };
            case userOrderConstants.VIEW_PREVIOUS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    orderPrevious: action.orderPrevious
                };
            case userOrderConstants.VIEW_PREVIOUS_FAILURE:
                return {
                    ...state,
                    loading: false
                };
        default:
            return state


    }
}