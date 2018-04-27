export const fetchAllPosts = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/posts'
    });
};

export const fetchSinglePost = id => {
    return $.ajax({
        method: 'GET',
        url: `api/posts/${id}`
    });
};