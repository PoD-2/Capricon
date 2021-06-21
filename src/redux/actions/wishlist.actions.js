import { wishlistConstants } from '../constants';
import { wishlistService } from '../../services';
import { alertActions } from './';

export const wishlistActions = {
    add,
    remove,
    view
};

function add(userId, productId) {
    return dispatch => {
        dispatch(request()); 

        wishlistService.add(userId, productId)
            .then(
                wishlist => { 
                        dispatch(success(wishlist));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: wishlistConstants.ADD_REQUEST } }
    function success(wishlist) { return { type: wishlistConstants.ADD_SUCCESS, wishlist } }
    function failure(error) { return { type: wishlistConstants.ADD_FAILURE, error } }
}


function remove(userId, productId) {
    return dispatch => {
        dispatch(request());

        wishlistService.remove(userId,productId)
            .then(
                wishlist => { 
                    dispatch(success(wishlist));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: wishlistConstants.REMOVE_REQUEST } }
    function success(wishlist) { return { type: wishlistConstants.REMOVE_SUCCESS, wishlist } }
    function failure(error) { return { type: wishlistConstants.REMOVE_FAILURE, error } }
}


function view(userId) {
    return dispatch => {
        dispatch(request());

        wishlistService.view(userId)
            .then(
                wishlist => { 
                    dispatch(success(wishlist));
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

    function request() { return { type: wishlistConstants.VIEW_REQUEST } }
    function success(wishlist) { return { type: wishlistConstants.VIEW_SUCCESS, wishlist } }
    function failure(error) { return { type: wishlistConstants.VIEW_FAILURE, error } }
}


