import { userAuthConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
let tempUser = JSON.parse(sessionStorage.getItem('user'));
const initialState = tempUser ? { loggedIn: true, user: tempUser } : user ? { loggedIn: true, user: user } : {};

export function userAuth(state = initialState, action) {
    switch (action.type) {
        case userAuthConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userAuthConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                user: action.user
            };
        case userAuthConstants.LOGIN_FAILURE:
            return {};
        case userAuthConstants.LOGOUT:
            return {};
        case userAuthConstants.REGISTER_REQUEST:
            return {
                    ...state,
                    loading: true
                };
        case userAuthConstants.REGISTER_SUCCESS:
            return {
                   ...state,
                   loading: false,
                   loggedIn: true,
                   user: action.user
                };
        case userAuthConstants.REGISTER_FAILURE:
            return {}; 
        default:
            return state
    }
} 