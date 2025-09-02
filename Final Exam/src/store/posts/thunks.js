import axios from 'axios';
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
  addPostRequest,
  addPostSuccess,
  addPostFailure,
  updatePostRequest,
  updatePostSuccess,
  updatePostFailure,
  deletePostRequest,
  deletePostSuccess,
  deletePostFailure,
} from './actions';

const API_URL = 'http://localhost:3000/posts';

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(fetchPostsRequest());
    const { data } = await axios.get(API_URL);
    dispatch(fetchPostsSuccess(data));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message || 'Failed to fetch posts'));
  }
};

export const addPost = (post) => async (dispatch, getState) => {
  try {
    dispatch(addPostRequest());
    const { auth } = getState();
    const payload = { ...post, userId: auth.user?.id || null };
    const { data } = await axios.post(API_URL, payload);
    dispatch(addPostSuccess(data));
  } catch (error) {
    dispatch(addPostFailure(error.message || 'Failed to add post'));
  }
};

export const updatePost = (id, updates) => async (dispatch) => {
  try {
    dispatch(updatePostRequest());
    const { data } = await axios.put(`${API_URL}/${id}`, updates);
    dispatch(updatePostSuccess(data));
  } catch (error) {
    dispatch(updatePostFailure(error.message || 'Failed to update post'));
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch(deletePostRequest());
    await axios.delete(`${API_URL}/${id}`);
    dispatch(deletePostSuccess(id));
  } catch (error) {
    dispatch(deletePostFailure(error.message || 'Failed to delete post'));
  }
};


