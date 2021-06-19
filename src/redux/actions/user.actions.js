import { userConstants } from '../constants';
import { userAuthService } from '../../services/';
import { alertActions } from './';

export const userActions = {
    login,
    logout,
    register
};

function login(user, remember, history) {
    return dispatch => {
        dispatch(request()); 

        userAuthService.login(user, remember)
            .then(
                user => { 
                        dispatch(success(user));
                        history.push('/');
                   
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userAuthService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user, remember, history) {
    return dispatch => {
        dispatch(request());

        userAuthService.register(user,remember)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');

                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}




