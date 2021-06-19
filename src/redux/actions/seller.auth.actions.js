import { sellerAuthConstants } from '../constants';
import { sellerAuthService } from '../../services';
import { alertActions } from '.';

export const sellerAuthActions = {
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

    function request(user) { return { type: sellerAuthConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: sellerAuthConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: sellerAuthConstants.LOGIN_FAILURE, error } }
}

function logout() {
    sellerAuthService.logout();
    return { type: sellerAuthConstants.LOGOUT };
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

    function request(user) { return { type: sellerAuthConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: sellerAuthConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: sellerAuthConstants.REGISTER_FAILURE, error } }
}




