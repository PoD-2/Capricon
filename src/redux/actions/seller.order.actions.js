import { sellerOrderConstants } from '../constants';
import { alertActions } from '.';
import { sellerOrderService } from '../../services';

export const sellerOrderActions = {
    viewOrderHistory
   
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

// function orderStatus(sellerId) {
//     return dispatch => {

//         dispatch(request());

//         sellerOrderService.viewOrderStatus(sellerId)
//             .then(
//                 products => {
//                     dispatch(success(products));
//                 },
//                 error => {

//                     dispatch(failure(error.toString()));
//                     dispatch(alertActions.error(error.message.toString()));
//                 }
//             );
//     };

//     function request() { return { type: sellerOrderConstants.VIEW_REQUEST } }
//     function success(products) { return { type: sellerOrderConstants.VIEW_SUCCESS, products } }
//     function failure(error) { return { type: sellerOrderConstants.VIEW_FAILURE, error } }
// }
