import { sellerOrderConstants } from '../constants';
import { alertActions } from '.';
import { sellerOrderService } from '../../services';

export const sellerOrderActions = {
    viewOrderHistory,
    viewOrderStatus,
    changeOrderStatus
   
};

function viewOrderHistory(sellerId) {
    return dispatch => {

        dispatch(request());

        return sellerOrderService.viewOrderHistory(sellerId)
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

    function request() { return { type: sellerOrderConstants.VIEW_REQUEST } }
    function success(orders) { return { type: sellerOrderConstants.VIEW_SUCCESS, orders } }
    function failure() { return { type: sellerOrderConstants.VIEW_FAILURE } }
}

function viewOrderStatus(sellerId) {
    return dispatch => {

        dispatch(request());

        sellerOrderService.viewOrderStatus(sellerId)
            .then(
                orderStatus => {
                    dispatch(success(orderStatus));
                },
                error => {
                    dispatch(failure());
                    dispatch(alertActions.error(error.message.toString()));
                }
            );
    };

    function request() { return { type: sellerOrderConstants.VIEW_STATUS_REQUEST } }
    function success(orderStatus) { return { type: sellerOrderConstants.VIEW_STATUS_SUCCESS, orderStatus } }
    function failure() { return { type: sellerOrderConstants.VIEW_STATUS_FAILURE } }
}


function changeOrderStatus(bookId, sellerId, changeStatus) {
    return dispatch => {

        dispatch(request());

        sellerOrderService.changeOrderStatus(bookId,sellerId, changeStatus)
            .then(
                response => {
                    dispatch(success(response));
                    dispatch(alertActions.success("Delivery Status Changed successfully"));
                },
                error => {

                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: sellerOrderConstants.CHANGE_REQUEST } }
    function success(orderStatus) { return { type: sellerOrderConstants.CHANGE_SUCCESS, orderStatus} }
    function failure() { return { type: sellerOrderConstants.CHANGE_FAILURE } }
}