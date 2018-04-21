import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
import { receiveErrors, clearErrors} from './error_actions';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const signup = user => dispatch => {
    return APIUtil.signup(user).then(
        currentUser => dispatch(receiveCurrentUser(currentUser))
    ).fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const login = user => dispatch => {
    return APIUtil.login(user).then(
        currentUser => dispatch(receiveCurrentUser(currentUser))
    ).fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = user => dispatch => {
    return APIUtil.logout().then(
        () => dispatch(receiveCurrentUser(null))
    );
};