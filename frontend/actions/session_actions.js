import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user 
});

export const signup = user => dispatch => {
    return APIUtil.signup(user).then(
        currentUser => dispatch(receiveCurrentUser(user))
    );
};

export const login = user => dispatch => {
    return APIUtil.login(user).then(
        currentUser => dispatch(receiveCurrentUser(user))
    );
};

export const logout = user => dispatch => {
    return APIUtil.logout().then(
        () => dispatch(receiveCurrentUser(null))
    );
};