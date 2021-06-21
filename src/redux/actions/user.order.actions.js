import { alertActions } from '.';
import { userOrderService } from '../../services';
import { userOrderConstants } from '../constants';

export const userOrderActions = {
    viewOrderHistory,
    viewOrderStatus
}


function viewOrderHistory(userId) {
    return dispatch => {

        dispatch(request());

        return userOrderService.viewOrderHistory(userId)
            .then(
                orderPrevious=> {
                    dispatch(success(orderPrevious));
                },
                error => {
                    dispatch(failure());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: userOrderConstants.VIEW_PREVIOUS_REQUEST } }
    function success(orderPrevious) { return { type: userOrderConstants.VIEW_PREVIOUS_SUCCESS, orderPrevious } }
    function failure() { return { type: userOrderConstants.VIEW_PREVIOUS_FAILURE } }
}

function viewOrderStatus(userId) {
    return dispatch => {

        dispatch(request());

        return userOrderService.viewOrderStatus(userId)
            .then(
                orders => {
                    dispatch(success(orders));
                },
                error => {
                    dispatch(failure());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: userOrderConstants.VIEW_REQUEST } }
    function success(orders) { return { type: userOrderConstants.VIEW_SUCCESS, orders } }
    function failure() { return { type: userOrderConstants.VIEW_FAILURE } }
}