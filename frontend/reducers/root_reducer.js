import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import postsReducer from './posts_reducer';

const rootReducer = combineReducers({
    currentUser: sessionReducer,
    errors: errorsReducer,
    posts: postsReducer
});

export default rootReducer;