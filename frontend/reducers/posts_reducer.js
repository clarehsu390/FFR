import { RECEIVE_POST, RECEIVE_ALL_POSTS } from '../actions/posts_actions';

const postsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            return action.posts;
        case RECEIVE_POST:
            return action.post;
        default:
            return state;
    }
};

export default postsReducer;