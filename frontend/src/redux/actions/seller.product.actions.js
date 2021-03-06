import { sellerProductConstants } from '../constants';
import { alertActions } from '.';
import { sellerProductService } from '../../services';

export const sellerProductActions = {
    add,
    view,
    changeQuantity
};

function add(data, sellerId, setProgress) {
    return dispatch => {

        dispatch(request());

        return sellerProductService.add(data, sellerId, setProgress)
            .then(
                res => {
                    dispatch(success(res.products));
                    dispatch(alertActions.success("product added successfully"));

                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: sellerProductConstants.ADD_REQUEST } }
    function success(products) { return { type: sellerProductConstants.ADD_SUCCESS, products } }
    function failure(error) { return { type: sellerProductConstants.ADD_FAILURE, error } }
}

function view(sellerId) {
    return dispatch => {

        dispatch(request());

        sellerProductService.view(sellerId)
            .then(
                products => {
                    dispatch(success(products));
                },
                error => {

                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.message.toString()));
                }
            );
    };

    function request() { return { type: sellerProductConstants.VIEW_REQUEST } }
    function success(products) { return { type: sellerProductConstants.VIEW_SUCCESS, products } }
    function failure(error) { return { type: sellerProductConstants.VIEW_FAILURE, error } }
}


function changeQuantity(productId, changeQty, sellerId) {
    return dispatch => {

        dispatch(request());

        sellerProductService.changeQuantity(productId, changeQty, sellerId)
            .then(
                response => {
                    dispatch(success(response.products));
                    dispatch(alertActions.success("Quantity increased successfully"));
                },
                error => {

                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.message.toString()));
                }
            );
    };

    function request() { return { type: sellerProductConstants.CHANGE_REQUEST } }
    function success(products) { return { type: sellerProductConstants.CHANGE_SUCCESS, products } }
    function failure(error) { return { type: sellerProductConstants.CHANGE_FAILURE, error } }
}