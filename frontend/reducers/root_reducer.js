import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
    currentUser: sessionReducer,
    errors: errorsReducer
});

export default rootReducer;