import { sellerConstants } from '../constants';
import { sellerAuthService } from '../../services/';
import { alertActions } from './';

export const sellerActions = {
    login,
    logout,
    register
};

function login(seller, remember, history) {
    return dispatch => {
        dispatch(request()); 

        sellerAuthService.login(seller, remember)
            .then(
                seller => { 
                        dispatch(success(seller));
                        history.push('/seller/dashboard');
                   
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: sellerConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: sellerConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: sellerConstants.LOGIN_FAILURE, error } }
}

function logout() {
    sellerAuthService.logout();
    return { type: sellerConstants.LOGOUT };
}

function register(seller, remember, history) {
    return dispatch => {
        dispatch(request());

        sellerAuthService.register(seller,remember)
            .then(
                seller => { 
                    dispatch(success(seller));
                    history.push('/seller/dashboard');

                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: sellerConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: sellerConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: sellerConstants.REGISTER_FAILURE, error } }
}




