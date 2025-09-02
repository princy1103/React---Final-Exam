export const FETCH_POSTS_REQUEST = 'posts/FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'posts/FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'posts/FETCH_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'posts/ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'posts/ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'posts/ADD_POST_FAILURE';

export const UPDATE_POST_REQUEST = 'posts/UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'posts/UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'posts/UPDATE_POST_FAILURE';

export const DELETE_POST_REQUEST = 'posts/DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'posts/DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'posts/DELETE_POST_FAILURE';

export const SET_FILTERS = 'posts/SET_FILTERS';
export const SET_SORT = 'posts/SET_SORT';

export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST });
export const fetchPostsSuccess = (posts) => ({ type: FETCH_POSTS_SUCCESS, payload: posts });
export const fetchPostsFailure = (error) => ({ type: FETCH_POSTS_FAILURE, payload: error });

export const addPostRequest = () => ({ type: ADD_POST_REQUEST });
export const addPostSuccess = (post) => ({ type: ADD_POST_SUCCESS, payload: post });
export const addPostFailure = (error) => ({ type: ADD_POST_FAILURE, payload: error });

export const updatePostRequest = () => ({ type: UPDATE_POST_REQUEST });
export const updatePostSuccess = (post) => ({ type: UPDATE_POST_SUCCESS, payload: post });
export const updatePostFailure = (error) => ({ type: UPDATE_POST_FAILURE, payload: error });

export const deletePostRequest = () => ({ type: DELETE_POST_REQUEST });
export const deletePostSuccess = (id) => ({ type: DELETE_POST_SUCCESS, payload: id });
export const deletePostFailure = (error) => ({ type: DELETE_POST_FAILURE, payload: error });

export const setFilters = (filters) => ({ type: SET_FILTERS, payload: filters });
export const setSort = (sortBy) => ({ type: SET_SORT, payload: sortBy });


