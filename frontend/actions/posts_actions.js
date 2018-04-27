import * as PostUtil from '../util/posts_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const requestAllPosts = () => dispatch => {
    return PostUtil.fetchAllPosts().then(
        posts => dispatch(receiveAllPosts(posts))
    );
};

export const requestSinglePost = (id) => dispatch => {
    return PostUtil.fetchSinglePost(id).then(
        post => dispatch(receivePost(post))
    );
};

export const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});