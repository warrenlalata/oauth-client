import {
  REQUEST_POSTS,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  posts: [],
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, loading: true };
    case REQUEST_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload, error: null };
    case REQUEST_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload, posts: [] };
    default:
      return state;
  }
};
