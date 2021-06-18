import { cartConstants } from '../constants';
import { cartService } from '../../services';
import { alertActions } from './';

export const cartActions = {
    add,
    remove,
    view
};

function add(userId, productId, history) {
    return dispatch => {
        dispatch(request()); 

        cartService.add(userId, productId)
            .then(
                cartItems => { 
                        dispatch(success(cartItems));
                        history.push('/cart');
                   
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: cartConstants.ADD_REQUEST } }
    function success(cartItems) { return { type: cartConstants.ADD_SUCCESS, cartItems } }
    function failure(error) { return { type: cartConstants.ADD_FAILURE, error } }
}


function remove(userId, productId) {
    return dispatch => {
        dispatch(request());

        cartService.remove(userId,productId)
            .then(
                cartItems => { 
                    dispatch(success(cartItems));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: cartConstants.REMOVE_REQUEST } }
    function success(cartItems) { return { type: cartConstants.REMOVE_SUCCESS, cartItems } }
    function failure(error) { return { type: cartConstants.REMOVE_FAILURE, error } }
}


function view(userId) {
    return dispatch => {
        dispatch(request());

        cartService.view(userId)
            .then(
                cartItems => { 
                    dispatch(success(cartItems));
                },
                error => {
                    if(error.httpStatusCode !== 404){
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.message.toString()));
                    } else {
                        dispatch(success([]));
                    }
                    
                }
            );
    };

    function request() { return { type: cartConstants.VIEW_REQUEST } }
    function success(cartItems) { return { type: cartConstants.VIEW_SUCCESS, cartItems } }
    function failure(error) { return { type: cartConstants.VIEW_FAILURE, error } }
}


